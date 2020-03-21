import PropTypes from 'prop-types';
import React from 'react';

import Logo from '%components/Logo';
import Navigation from '%components/Navigation';
import { NavigationContext } from '%contexts/Navigation';

import styles from './styles.module.scss';

export default function Header(props) {
  const { theme } = props;
  const { state: navigationState } = React.useContext(NavigationContext);

  return (
    <header
      className={`
        ${styles.header}
        ${navigationState.atTop ? styles.atTop : ''}
        ${navigationState.isVisible ? styles.isVisible : ''}
      `}
    >
      <div className={styles.headerContainer}>
        <div className={styles.headerLogo}>
          <Logo />
        </div>
        <Navigation theme={theme} />
      </div>
    </header>
  );
}

Header.propTypes = {
  theme: PropTypes.string.isRequired,
};
