import React from 'react';

import FooterCopyright from 'components/FooterCopyright';
import FooterLinks from 'components/FooterLinks';
import FooterSocial from 'components/FooterSocial';

import styles from './styles.scss';

export default function Footer() {
  return (
    <footer className={styles.Footer}>
      <div className={styles.wrapper}>
        <FooterLinks />
        <FooterSocial />
        <FooterCopyright />
      </div>
    </footer>
  );
}
