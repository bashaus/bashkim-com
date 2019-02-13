import Link from 'next/link';
import React from 'react';

import FooterColumn from 'components/FooterColumn';

import styles from './styles.scss';

export default function FooterLinks() {
  return (
    <div className={styles.FooterLinks}>
      <FooterColumn label="Articles" id="footer--articles">
        <ul>
          <li>
            <a
              href="https://medium.com/@bashaus"
              target="_blank"
              rel="noopener noreferrer"
            >
              On Medium
            </a>
          </li>
          <li>
            <a
              href="https://www.sitepoint.com/author/bashaus/"
              target="_blank"
              rel="noopener noreferrer"
            >
              On Site Point
            </a>
          </li>
        </ul>
      </FooterColumn>

      <FooterColumn label="Portfolio" id="footer--portfolio">
        <ul>
          <li>
            <Link href="/portfolio">
              <a>Case studies</a>
            </Link>
          </li>
          <li>
            <a
              href="https://github.com/bashaus?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
            >
              On GitHub
            </a>
          </li>
        </ul>
      </FooterColumn>

      <FooterColumn label="Legal" id="footer--legal">
        <ul>
          <li>
            <Link href="/legal/cookie-policy">
              <a>Cookie Policy</a>
            </Link>
          </li>
        </ul>
      </FooterColumn>
    </div>
  );
}
