import { ReactNode } from "react";
import classNames from "classnames";

import styles from "./styles.module.scss";

export type HeaderTextPartialProps = {
  aside?: ReactNode;
  backgroundClassName?: string;
  children?: ReactNode;
};

export const HeaderTextPartial = ({
  aside,
  backgroundClassName,
  children,
}: HeaderTextPartialProps): JSX.Element => (
  <header className={styles.HeaderTextPartial}>
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
