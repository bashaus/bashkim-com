import React from "react";

import styles from "./styles.module.scss";

interface PartialCaptionedProps {
  children: React.ReactNode;
  figure: React.ReactNode;
}

const PartialCaptioned = ({
  children,
  figure,
}: PartialCaptionedProps): JSX.Element => (
  <figure className={styles.PartialCaptioned}>
    <figcaption className={styles.caption}>{children}</figcaption>

    <div className={styles.figure}>{figure}</div>
  </figure>
);

export default PartialCaptioned;
