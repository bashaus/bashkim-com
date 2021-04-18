import { useMachine } from "@xstate/react";
import type { CSSProperties } from "react";
import { useCallback, useMemo } from "react";
import { BlurhashCanvas } from "react-blurhash";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import VisibilitySensor from "react-visibility-sensor";

import { PromiseFetchEvent, PromiseEvent } from "machines/Promise/events";
import { PromiseMachine } from "machines/Promise/machine";
import { PromiseService } from "machines/Promise/services";
import { PromiseState } from "machines/Promise/states";

import styles from "./styles.module.scss";

type DeferredImageProps = {
  alt: string;
  blurHash?: string;
  src: string;
  width: number;
  height: number;
};

const DeferredImage = ({
  alt,
  blurHash,
  src,
  width,
  height,
}: DeferredImageProps): JSX.Element => {
  const [state, send] = useMachine(PromiseMachine, {
    services: {
      [PromiseService.FETCH]: (_context, event: PromiseFetchEvent) =>
        new Promise<void>((resolve, reject) => {
          const preload = new Image();
          preload.src = event.payload.src;
          preload.onload = (): void => resolve();
          preload.onabort = () => reject(new Error());
          preload.onerror = () => reject(new Error());
        }),
    },
  });

  const handleVisibilityChange = useCallback(
    (isVisible: boolean): void => {
      if (state.value !== PromiseState.INIT) {
        return;
      }

      if (!isVisible) {
        return;
      }

      send({
        type: PromiseEvent.FETCH,
        payload: { src },
      });
    },
    [send, state.value, src]
  );

  const preloadAsset = useMemo(() => {
    if (blurHash) {
      return (
        <BlurhashCanvas
          className={styles.Asset}
          hash={blurHash}
          punch={1}
          width={width}
          height={height}
        />
      );
    } else {
      const preloadStyles: CSSProperties = {
        paddingBottom: `${(height / width) * 100}%`,
      };

      return <div className={styles.Asset} style={preloadStyles} />;
    }
  }, [blurHash, width, height]);

  const isInitState = state.matches(PromiseState.INIT);
  const isFetchingState = state.matches(PromiseState.FETCHING);
  const isResolvedState = state.matches(PromiseState.RESOLVED);
  const isRejectedState = state.matches(PromiseState.REJECTED);
  const isDoneState = isResolvedState || isRejectedState;

  return (
    <SwitchTransition>
      <CSSTransition
        key={isDoneState}
        addEndListener={(node, done) =>
          node.addEventListener("transitionend", done, false)
        }
        classNames={{
          enter: styles.fadeEnter,
          exit: styles.fadeExit,
          enterActive: styles.fadeEnterActive,
          exitActive: styles.fadeExitActive,
        }}
      >
        <div className={styles.DeferredImage}>
          {isInitState && (
            <VisibilitySensor
              partialVisibility
              onChange={handleVisibilityChange}
            >
              {preloadAsset}
            </VisibilitySensor>
          )}

          {isFetchingState && preloadAsset}

          {isDoneState && (
            <img src={src} width={width} height={height} alt={alt} />
          )}
        </div>
      </CSSTransition>
    </SwitchTransition>
  );
};

export default DeferredImage;
