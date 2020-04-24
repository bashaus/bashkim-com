import React from 'react';

import Logo from '%components/Logo';
import MenuSignifierButton from '%components/MenuSignifierButton';

import styles from './styles.module.scss';

interface MenuProps {
  backButton?: React.ReactNode;
}

const Menu = ({ backButton }: MenuProps): JSX.Element => (
  <div className={styles.Menu}>
    <div className={styles.back}>{backButton}</div>

    <div className={styles.logo}>
      <Logo />
    </div>

    <div className={styles.signifier} aria-label="Menu">
      <MenuSignifierButton />
    </div>
  </div>
);

export default Menu;
