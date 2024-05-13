import classNames from "classnames";
import { gsap } from "gsap";
import { ComponentPropsWithoutRef, useEffect, useRef } from "react";

import styles from "./styles.module.scss";

export type ModalOverlayProps = ComponentPropsWithoutRef<"div"> & {
  isOpen: boolean;
  onHideComplete?(): void;
  onHideStart?(): void;
  onShowComplete?(): void;
  onShowStart?(): void;
};

export const ModalOverlay = ({
  children,
  className,
  isOpen,
  onHideComplete,
  onHideStart,
  onShowComplete,
  onShowStart,
  ...props
}: ModalOverlayProps) => {
  const svgRef = useRef<SVGPathElement>(null);

  // wait until DOM has been rendered
  useEffect(() => {
    if (isOpen) {
      gsap
        .timeline({
          onStart: () => onShowStart?.(),
          onComplete: () => onShowComplete?.(),
        })
        .set(svgRef.current, {
          attr: { d: "M 0 100 V 100 Q 50 100 100 100 V 100 z" },
        })
        .to(
          svgRef.current,
          {
            duration: 0.5,
            ease: "power4.in",
            attr: { d: "M 0 100 V 50 Q 50 0 100 50 V 100 z" },
          },
          0,
        )
        .to(svgRef.current, {
          duration: 0.5,
          ease: "expo",
          attr: { d: "M 0 100 V 0 Q 50 0 100 0 V 100 z" },
        });
    }

    if (!isOpen) {
      gsap
        .timeline({
          onStart: () => onHideStart?.(),
          onComplete: () => onHideComplete?.(),
        })
        .set(svgRef.current, {
          attr: { d: "M 0 100 V 0 Q 50 0 100 0 V 100 z" },
        })
        .to(svgRef.current, {
          duration: 0.8,
          ease: "power4.in",
          attr: { d: "M 0 100 V 50 Q 50 0 100 50 V 100 z" },
        })
        .to(svgRef.current, {
          duration: 0.5,
          ease: "expo",
          attr: { d: "M 0 100 V 100 Q 50 100 100 100 V 100 z" },
        });
    }
  }, [isOpen, onHideComplete, onHideStart, onShowComplete, onShowStart]);

  return (
    <div className={classNames(className, styles["ModalOverlay"])} {...props}>
      <svg
        className={styles["SvgContainer"]}
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <path
          ref={svgRef}
          vectorEffect="non-scaling-stroke"
          d="M 0 100 V 100 Q 50 100 100 100 V 100 z"
          fill="rgba(0, 0, 0, .8)"
        />
      </svg>
      {children}
    </div>
  );
};
