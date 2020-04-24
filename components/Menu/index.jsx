import PropTypes from 'prop-types';
import React from 'react';

import Logo from '%components/Logo';
import MenuSignifierButton from '%components/MenuSignifierButton';

import styles from './styles.module.scss';

const Menu = ({ backButton }) => (
  <div className={styles.Menu}>
    <div className={styles.back}>
      { backButton }
    </div>

    <div className={styles.logo}>
      <Logo />
    </div>

    <div className={styles.signifier} aria-label="Menu">
      <MenuSignifierButton />
    </div>
  </div>
);

Menu.propTypes = {
  backButton: PropTypes.node,
};

Menu.defaultProps = {
  backButton: null,
};

export default Menu;
