import { ReactNode } from "react";

import styles from "./styles.module.scss";

export default function CarouselDots(dots: ReactNode) {
  return (
    <div>
      <ol className={styles["CarouselDots"]}>{dots}</ol>
    </div>
  );
}
