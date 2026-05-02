import { MotionValue } from "motion/react";
import { createContext, useContext } from "react";

export type ScrollLockContextValue = {
  scrollYProgress: MotionValue<number>;
};

export const ScrollLockContext = createContext<
  ScrollLockContextValue | undefined
>(undefined);

export function useScrollLock() {
  const context = useContext(ScrollLockContext);
  if (!context) {
    throw new Error("useScrollProgress must be used within ScrollProvider");
  }

  return context;
}
