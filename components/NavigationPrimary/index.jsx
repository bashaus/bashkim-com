import Link from 'next/link';
import PropTypes from 'prop-types';
import React from 'react';

import styles from './styles.module.scss';

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
          <a href="https://medium.com/@bashaus" target="_blank" rel="noopener noreferrer">
            <span>Blog</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

NavigationPrimary.propTypes = {
  theme: PropTypes.string.isRequired,
};
