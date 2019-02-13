import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import styles from './styles.scss';

export default function NavigationPrimary(props) {
  const { theme } = props;

  return (
    <nav
      data-heading="Bashkim.com"
      aria-label="Main menu"
      className={styles.NavigationPrimary}
    >
      <ul>
        <li className={`${styles.navigation_portfolio} ${theme === 'portfolio' ? styles.selected : ''}`}>
          <Link href="/portfolio">
            <a>
              <span>Portfolio</span>
            </a>
          </Link>
        </li>
        <li className={`${styles.navigation_about} ${theme === 'about' ? styles.selected : ''}`}>
          <Link href="/about">
            <a>
              <span>About</span>
            </a>
          </Link>
        </li>
        <li className={`${styles.navigation_blog} ${theme === 'blog' ? styles.selected : ''}`}>
          <Link href="/blog">
            <a>
              <span>Blog</span>
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

NavigationPrimary.propTypes = {
  theme: PropTypes.string.isRequired,
};
