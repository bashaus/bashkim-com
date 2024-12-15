import { ReactNode } from "react";

import styles from "./styles.module.scss";

export const CarouselDots = (dots: ReactNode) => (
  <div>
    <ol className={styles["CarouselDots"]}>{dots}</ol>
  </div>
);
