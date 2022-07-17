import { gsap } from "gsap";
import { ComponentPropsWithRef, useEffect, useRef } from "react";

import * as S from "./styles";

export type ModalContentProps = ComponentPropsWithRef<"div"> & {
  isOpen: boolean;
  onHideComplete?(): void;
  onHideStart?(): void;
  onShowComplete?(): void;
  onShowStart?(): void;
};

export const ModalContent = ({
  isOpen,
  onHideComplete,
  onHideStart,
  onShowComplete,
  onShowStart,
  ...props
}: ModalContentProps) => {
  const divRef = useRef<HTMLDivElement>(null);

  // Wait until DOM has been rendered
  useEffect(() => {
    if (isOpen) {
      gsap
        .timeline({
          onStart: () => onShowStart && onShowStart(),
          onComplete: () => onShowComplete && onShowComplete(),
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
          onStart: () => onHideStart && onHideStart(),
          onComplete: () => onHideComplete && onHideComplete(),
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
    <S.AnimationContainer ref={divRef} style={{ visibility: "hidden" }}>
      <S.ModalContent {...props} />
    </S.AnimationContainer>
  );
};
