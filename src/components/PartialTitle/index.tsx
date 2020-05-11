import React from "react";

import styles from "./styles.module.scss";

interface PartialTitleProps {
  children?: React.ReactNode;
  image?: string;
}

const PartialTitle = ({ children, image }: PartialTitleProps): JSX.Element => (
  <header className={styles.PartialTitle}>
    <div>{children}</div>
    {image && <img src={image} alt="" />}
  </header>
);

export default PartialTitle;
