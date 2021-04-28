import React from "react";
import styles from "./styles.module.scss";

export type PartialTitleProps = {
  children?: React.ReactNode;
  image?: string;
};

export const PartialTitle = ({
  children,
  image,
}: PartialTitleProps): JSX.Element => (
  <header className={styles.PartialTitle}>
    <div>{children}</div>
    {image && <img src={image} alt="" />}
  </header>
);
