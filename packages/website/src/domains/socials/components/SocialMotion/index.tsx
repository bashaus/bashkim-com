import { motion, Variants } from "motion/react";
import { PropsWithChildren } from "react";

const animationVariant: Variants = {
  initial: { opacity: 0, x: 10 },
  animate: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.2 + i * 0.1,
      duration: 0.3,
      ease: "easeOut",
    },
  }),
  exit: (i: number) => ({
    opacity: 0,
    x: 10,
    transition: {
      delay: i * 0.1,
      duration: 0.3,
      ease: "easeIn",
    },
  }),
};

export type SocialMotionProps = Readonly<
  PropsWithChildren<{
    custom: number;
  }>
>;

export default function SocialMotion({ custom, children }: SocialMotionProps) {
  return (
    <motion.div
      custom={custom}
      variants={animationVariant}
      initial="initial"
      exit="exit"
      animate="animate"
    >
      {children}
    </motion.div>
  );
}
