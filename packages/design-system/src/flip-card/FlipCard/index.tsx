import { HTMLMotionProps, useSpring, useTransform } from "motion/react";

import { useScrollProgress } from "../FlipCardContainer";
import * as S from "./styles";

export type FlipCardProps = Readonly<
  HTMLMotionProps<"div"> & {
    maxWidth?: number;
    height?: number;
  }
>;

export default function FlipCard({
  children,
  maxWidth = 250,
  height = 400,
  style,
  ...restProps
}: FlipCardProps) {
  const { scrollYProgress } = useScrollProgress();

  const springConfig = { stiffness: 120, damping: 20, mass: 0.5 };

  const inputRange = [0.2, 0.5, 0.8];

  const rotateX = useTransform(scrollYProgress, inputRange, [0, -5, 0]);
  const rotateY = useTransform(scrollYProgress, inputRange, [0, 90, 180]);
  const rotateZ = useTransform(scrollYProgress, inputRange, [0, -15, 0]);
  const translateX = useTransform(scrollYProgress, inputRange, [0, -50, 0]);
  const translateZ = useTransform(scrollYProgress, inputRange, [0, -150, 0]);

  const smoothRotateX = useSpring(rotateX, springConfig);
  const smoothRotateY = useSpring(rotateY, springConfig);
  const smoothRotateZ = useSpring(rotateZ, springConfig);
  const smoothTranslateX = useSpring(translateX, springConfig);
  const smoothTranslateZ = useSpring(translateZ, springConfig);

  return (
    <S.Container>
      <S.Card
        style={{
          ...style,
          rotateX: smoothRotateX,
          rotateY: smoothRotateY,
          rotateZ: smoothRotateZ,
          x: smoothTranslateX,
          z: smoothTranslateZ,
          maxWidth,
          width: "100%",
          height,
        }}
        {...restProps}
      >
        {children}
      </S.Card>
    </S.Container>
  );
}
