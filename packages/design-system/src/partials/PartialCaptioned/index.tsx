import React from "react";
import styles from "./styles.module.scss";

export type PartialCaptionedProps = {
  children: React.ReactNode;

  /**
   * An image, canvas, etc. which represents the figure
   */
  figure: React.ReactNode;
};

export const PartialCaptioned = ({
  children,
  figure,
}: PartialCaptionedProps): JSX.Element => (
  <figure className={styles.PartialCaptioned}>
    <figcaption className={styles.Caption}>{children}</figcaption>
    <div className={styles.Figure}>{figure}</div>
  </figure>
);
