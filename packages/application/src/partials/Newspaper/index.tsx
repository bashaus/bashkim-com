import React from "react";

import styles from "./styles.module.scss";

interface PartialNewspaperProps {
  children?: React.ReactNode;
}

const PartialNewspaper = ({ children }: PartialNewspaperProps): JSX.Element => (
  <div className={styles.PartialNewspaper}>{children}</div>
);

export default PartialNewspaper;
