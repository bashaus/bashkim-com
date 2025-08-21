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

  const inputRange = [0.33, 0.49, 0.66];

  const rotateY = useTransform(scrollYProgress, inputRange, [0, 90, 180]);
  const translateX = useTransform(scrollYProgress, inputRange, [0, -50, 0]);
  const translateZ = useTransform(scrollYProgress, inputRange, [0, -150, 0]);
  const rotateZ = useTransform(scrollYProgress, inputRange, [0, -15, 0]);
  const rotateX = useTransform(scrollYProgress, inputRange, [0, 5, 0]);

  const springConfig = { stiffness: 120, damping: 20, mass: 0.5 };

  const smoothRotateY = useSpring(rotateY, springConfig);
  const smoothX = useSpring(translateX, springConfig);
  const smoothZ = useSpring(translateZ, springConfig);
  const smoothRotateZ = useSpring(rotateZ, springConfig);
  const smoothRotateX = useSpring(rotateX, springConfig);

  return (
    <S.Card
      style={{
        ...style,
        rotateX: smoothRotateX,
        rotateY: smoothRotateY,
        rotateZ: smoothRotateZ,
        x: smoothX,
        y: "-50%",
        z: smoothZ,
        maxWidth,
        width: "100%",
        height,
      }}
      {...restProps}
    >
      {children}
    </S.Card>
  );
}
