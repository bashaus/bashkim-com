import Link from "next/link";

import styles from "./styles.module.scss";

export const Logo = (): JSX.Element => (
  <Link href="/">
    <a className={styles.Logo}>
      <strong>Bashkim Isai</strong>
      <span>Creative Technologist</span>
    </a>
  </Link>
);
