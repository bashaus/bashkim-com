import Link from "next/link";
import { ReactNode } from "react";

import { Logo } from "@bashkim-com/design-system";

import styles from "./styles.module.scss";

export type MenuProps = {
  backButton?: ReactNode;
};

export const Menu = ({ backButton }: MenuProps): JSX.Element => (
  <div className={styles.Menu}>
    <div className={styles.Back}>{backButton}</div>

    <Link href="/">
      <a className={styles.Logo}>
        <Logo />
      </a>
    </Link>

    <div className={styles.Search}></div>
  </div>
);
