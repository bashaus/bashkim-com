import React from "react";

import styles from "./styles.module.scss";

interface PartialSubtitleProps {
  children?: React.ReactNode;
}

const PartialSubtitle = ({ children }: PartialSubtitleProps): JSX.Element => (
  <div className={styles.PartialSubtitle}>{children}</div>
);

export default PartialSubtitle;
