import Link from "next/link";
import React from "react";

import styles from "./styles.module.scss";

const Logo = (): JSX.Element => (
  <Link href="/">
    <a className={styles.Logo}>
      <strong>Bashkim Isai</strong>
      <span>Creative Technologist</span>
    </a>
  </Link>
);

export default Logo;
