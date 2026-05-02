import { MotionProps, useMotionValue, useTransform } from "motion/react";
import { useEffect, useRef } from "react";

import { useScrollLock } from "../../scroll-lock/ScrollLockContainer/context";
import * as S from "./styles";

export type DeviceViewportProps = Readonly<MotionProps>;

export default function DeviceViewport({
  children,
  ...restProps
}: DeviceViewportProps) {
  const { scrollYProgress } = useScrollLock();

  const figureRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);

  const scrollRangeRatio = useMotionValue(0);

  useEffect(() => {
    if (!figureRef.current || !viewportRef.current) return;

    const calculateRatio = () => {
      const figureHeight =
        figureRef.current?.getBoundingClientRect().height || 0;
      const viewportHeight =
        viewportRef.current?.getBoundingClientRect().height || 0;

      if (figureHeight > 0) {
        const ratio = (figureHeight - viewportHeight) / figureHeight;
        scrollRangeRatio.set(ratio);
      }
    };

    const observer = new ResizeObserver(calculateRatio);
    observer.observe(figureRef.current);
    observer.observe(viewportRef.current);

    return () => observer.disconnect();
  }, [scrollRangeRatio]);

  const translateY = useTransform(scrollYProgress, (progress) => {
    const ratio = scrollRangeRatio.get();
    const currentPercent = progress * (-ratio * 100);
    return `${currentPercent}%`;
  });

  return (
    <S.Viewport ref={viewportRef} {...restProps}>
      <S.Figure ref={figureRef} style={{ translateY }}>
        {children}
      </S.Figure>
    </S.Viewport>
  );
}
