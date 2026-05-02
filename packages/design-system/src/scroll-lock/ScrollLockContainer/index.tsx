import { useScroll } from "motion/react";
import { PropsWithChildren, useMemo, useRef } from "react";

import { ScrollLockContext } from "./context";
import * as S from "./styles";

export type ScrollLockContainerProps = Readonly<
  PropsWithChildren<{
    minHeight?: string;
  }>
>;

export default function ScrollLockContainer({
  children,
  minHeight = "100vh",
}: ScrollLockContainerProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const value = useMemo(() => ({ scrollYProgress }), [scrollYProgress]);

  return (
    <ScrollLockContext.Provider value={value}>
      <S.Container ref={containerRef}>
        <S.StickyWrapper style={{ minHeight }}>{children}</S.StickyWrapper>
      </S.Container>
    </ScrollLockContext.Provider>
  );
}
