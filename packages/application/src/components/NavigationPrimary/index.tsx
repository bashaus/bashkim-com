import classNames from "classnames";
import Link from "next/link";

import styles from "./styles.module.scss";

export type NavigationPrimaryProps = {
  theme: string;
};

export const NavigationPrimary = ({
  theme,
}: NavigationPrimaryProps): JSX.Element => (
  <nav
    data-heading="Main menu"
    aria-label="Main menu"
    className={styles.NavigationPrimary}
  >
    <ul>
      <li
        className={classNames(styles.NavigationPortfolio, {
          [styles.isSelected]: theme === "portfolio",
        })}
      >
        <Link href="/portfolio">
          <a>
            <span>Portfolio</span>
          </a>
        </Link>
      </li>
      <li
        className={classNames(styles.NavigationAbout, {
          [styles.isSelected]: theme === "about",
        })}
      >
        <Link href="/about">
          <a>
            <span>About</span>
          </a>
        </Link>
      </li>
      <li
        className={classNames(styles.NavigationBlog, {
          [styles.isSelected]: theme === "blog",
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
