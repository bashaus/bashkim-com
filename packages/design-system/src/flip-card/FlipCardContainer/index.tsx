import { MotionValue, useScroll } from "motion/react";
import {
  createContext,
  PropsWithChildren,
  useContext,
  useMemo,
  useRef,
} from "react";

import * as S from "./styles";

export type ScrollContextValue = {
  scrollYProgress: MotionValue<number>;
};

const ScrollContext = createContext<ScrollContextValue | undefined>(undefined);

export function useScrollProgress() {
  const context = useContext(ScrollContext);
  if (!context) {
    throw new Error("useScrollProgress must be used within ScrollProvider");
  }

  return context;
}

export type FlipCardContainerProps = Readonly<PropsWithChildren>;

export default function FlipCardContainer({
  children,
}: FlipCardContainerProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const value = useMemo(() => ({ scrollYProgress }), [scrollYProgress]);

  return (
    <ScrollContext.Provider value={value}>
      <S.Container ref={containerRef}>
        <S.StickyWrapper>{children}</S.StickyWrapper>
      </S.Container>
    </ScrollContext.Provider>
  );
}
