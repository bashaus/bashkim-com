import { ReactNode } from "react";

import styles from "./styles.module.scss";

export type CarouselDotsChildren = ReactNode;

export const CarouselDots = (children: CarouselDotsChildren) => (
  <div>
    <ol className={styles["CarouselDots"]}>{children}</ol>
  </div>
);
