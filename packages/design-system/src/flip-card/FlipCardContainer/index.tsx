import { MotionValue, useScroll } from "motion/react";
import { createContext, ReactNode, useContext, useMemo, useRef } from "react";

import * as S from "./styles";

interface ScrollContextValue {
  scrollYProgress: MotionValue<number>;
}

const ScrollContext = createContext<ScrollContextValue | undefined>(undefined);

export function useScrollProgress() {
  const context = useContext(ScrollContext);
  if (!context)
    throw new Error("useScrollProgress must be used within ScrollProvider");
  return context;
}

interface ScrollProviderProps {
  readonly children: ReactNode;
}

export default function FlipCardContainer({ children }: ScrollProviderProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
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
