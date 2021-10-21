import { memo, useCallback, useContext, useEffect, useRef } from "react";

import { NavigationActionsTypes } from "%contexts/Navigation/actions";
import { NavigationContext } from "%contexts/Navigation/context";

import styles from "./styles.module.scss";

export const HeaderIntersection = memo(
  function HeaderIntersection(): JSX.Element {
    const { dispatch: navigationDispatch } = useContext(NavigationContext);
    const ref = useRef<HTMLDivElement>(null);

    const processIntersectionEntries = useCallback(
      (entries: Array<IntersectionObserverEntry>): void => {
        entries.forEach((entry) =>
          navigationDispatch({
            type: NavigationActionsTypes.SET_SCROLL_AT_TOP,
            payload: entry.isIntersecting,
          })
        );
      },
      [navigationDispatch]
    );

    useEffect(() => {
      if (typeof IntersectionObserver === typeof undefined) {
        return (): void => {
          /* IntersectionObserver not supported */
        };
      }

      const interactionObserver = new IntersectionObserver(
        processIntersectionEntries
      );

      const { current } = ref;

      if (current) {
        interactionObserver.observe(current);
      }

      return (): void => {
        if (current) {
          interactionObserver.unobserve(current);
        }
      };
    }, [processIntersectionEntries]);

    return <div ref={ref} className={styles.HeaderIntersection} />;
  }
);
