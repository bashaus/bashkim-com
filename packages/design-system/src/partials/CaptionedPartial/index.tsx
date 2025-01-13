import { ReactNode } from "react";

import styles from "./styles.module.scss";

export type CaptionedPartialProps = {
  children: ReactNode;

  /**
   * An image, canvas, etc. which represents the figure
   */
  figure: ReactNode;
};

export default function CaptionedPartial({
  children,
  figure,
}: CaptionedPartialProps) {
  return (
    <figure className={styles["CaptionedPartial"]}>
      <figcaption className={styles["Caption"]}>{children}</figcaption>
      <div className={styles["Figure"]}>{figure}</div>
    </figure>
  );
}
