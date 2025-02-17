import { motion } from "framer-motion";
import { PropsWithChildren } from "react";

export type MotionFadeInProps = Readonly<PropsWithChildren>;

export default function MotionFadeIn({ children }: MotionFadeInProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {children}
    </motion.div>
  );
}
