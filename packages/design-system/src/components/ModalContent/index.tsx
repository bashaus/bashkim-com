import classNames from "classnames";
import { gsap } from "gsap";
import { ComponentPropsWithoutRef, useEffect, useRef } from "react";

import styles from "./styles.module.scss";

export type ModalContentProps = Readonly<
  ComponentPropsWithoutRef<"div"> & {
    onHideComplete?(): void;
    onHideStart?(): void;
    onShowComplete?(): void;
    onShowStart?(): void;
    isOpen: boolean;
  }
>;

export default function ModalContent({
  className,
  onHideComplete,
  onHideStart,
  onShowComplete,
  onShowStart,
  isOpen,
  ...props
}: ModalContentProps) {
  const divRef = useRef<HTMLDivElement>(null);

  // Wait until DOM has been rendered
  useEffect(() => {
    if (isOpen) {
      gsap
        .timeline({
          onStart: () => onShowStart?.(),
          onComplete: () => onShowComplete?.(),
        })
        .set(divRef.current, { autoAlpha: 0 })
        .to(divRef.current, {
          duration: 0.5,
          delay: 0.5,
          autoAlpha: 1,
        });
    }

    if (!isOpen) {
      gsap
        .timeline({
          onStart: () => onHideStart?.(),
          onComplete: () => onHideComplete?.(),
        })
        .set(divRef.current, { autoAlpha: 1 })
        .to(divRef.current, {
          duration: 0.5,
          delay: 0.5,
          autoAlpha: 0,
        });
    }
  }, [isOpen, onHideComplete, onHideStart, onShowComplete, onShowStart]);

  return (
    <div
      className={styles["AnimationContainer"]}
      ref={divRef}
      style={{ visibility: "hidden" }}
    >
      <div
        className={classNames(className, styles["ModalContent"])}
        {...props}
      />
    </div>
  );
}
