import classNames from "classnames";
import Link from "next/link";
import React from "react";

import styles from "./styles.module.scss";

type NavigationPrimaryProps = {
  theme: string;
};

const NavigationPrimary = ({ theme }: NavigationPrimaryProps): JSX.Element => (
  <nav
    data-heading="Bashkim.com"
    aria-label="Main menu"
    className={styles.NavigationPrimary}
  >
    <ul>
      <li
        className={classNames({
          [styles.navigation_portfolio]: true,
          [styles.selected]: theme === "portfolio",
        })}
      >
        <Link href="/portfolio">
          <a>
            <span>Portfolio</span>
          </a>
        </Link>
      </li>
      <li
        className={classNames({
          [styles.navigation_about]: true,
          [styles.selected]: theme === "about",
        })}
      >
        <Link href="/about">
          <a>
            <span>About</span>
          </a>
        </Link>
      </li>
      <li
        className={classNames({
          [styles.navigation_blog]: true,
          [styles.selected]: theme === "blog",
        })}
      >
        <a
          href="https://medium.com/@bashaus"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>Blog</span>
        </a>
      </li>
    </ul>
  </nav>
);

export default NavigationPrimary;
