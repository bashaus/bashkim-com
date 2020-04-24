import React from 'react';

import FooterCopyright from '%components/FooterCopyright';
import FooterLinks from '%components/FooterLinks';
import FooterSocial from '%components/FooterSocial';

import styles from './styles.module.scss';

const Footer = () => (
  <footer className={styles.Footer}>
    <div className={styles.wrapper}>
      <FooterLinks />
      <FooterSocial />
      <FooterCopyright />
    </div>
  </footer>
);

export default Footer;
