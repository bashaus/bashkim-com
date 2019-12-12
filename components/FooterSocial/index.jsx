import React from 'react';

import FooterColumn from '%components/FooterColumn';

import styles from './styles.scss';

export default function FooterSocial() {
  return (
    <div className={styles.FooterSocial}>
      <FooterColumn label="Connect">
        <ul>
          <li>
            <a
              href="https://stackoverflow.com/users/600240/bashaus"
              target="_blank"
              rel="noopener noreferrer"
            >
              Stack Overflow
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/bashaus"
              target="_blank"
              rel="noopener noreferrer"
            >
              Linked In
            </a>
          </li>
        </ul>
      </FooterColumn>
    </div>
  );
}
