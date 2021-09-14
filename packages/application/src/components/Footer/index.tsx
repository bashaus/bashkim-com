import { FooterCopyright } from "%components/FooterCopyright";
import { FooterLinks } from "%components/FooterLinks";
import { FooterSocial } from "%components/FooterSocial";

import styles from "./styles.module.scss";

export const Footer = (): JSX.Element => (
  <footer className={styles.Footer}>
    <div className={styles.Container}>
      <FooterLinks />
      <FooterSocial />
      <FooterCopyright />
    </div>
  </footer>
);
