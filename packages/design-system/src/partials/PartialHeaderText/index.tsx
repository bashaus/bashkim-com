import React from "react";
import classNames from "classnames";

import styles from "./styles.module.scss";

export type PartialHeaderTextProps = {
  aside?: React.ReactNode;
  backgroundClassName?: string;
  children?: React.ReactNode;
};

export const PartialHeaderText = ({
  aside,
  backgroundClassName,
  children,
}: PartialHeaderTextProps): JSX.Element => (
  <header className={styles.PartialHeaderText}>
    <div className={styles.Foreground}>
      <div className={styles.Content}>{children}</div>

      {aside && <aside className={styles.Aside}>{aside}</aside>}
    </div>

    <div
      className={classNames(styles.Background, backgroundClassName)}
      aria-hidden="true"
    />
  </header>
);
