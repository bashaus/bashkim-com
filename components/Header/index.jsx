import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import Logo from 'components/Logo';
import Navigation from 'components/Navigation';

import styles from './styles.scss';

export function HeaderDisconnected(props) {
  const {
    headerIsIntersecting,
    menuIsVisible,
    theme,
  } = props;

  return (
    <header
      className={`
        ${styles.header}
        ${headerIsIntersecting ? styles.headerIsIntersecting : ''}
        ${menuIsVisible ? styles.menuIsVisible : ''}
      `}
    >
      <div className={styles.headerContainer}>
        <div className={styles.headerLogo}>
          <Logo />
        </div>
        <Navigation headerIsIntersecting={headerIsIntersecting} theme={theme} />
      </div>
    </header>
  );
}

HeaderDisconnected.propTypes = {
  theme: PropTypes.string.isRequired,

  /* mapStateToProps */
  headerIsIntersecting: PropTypes.bool.isRequired,
  menuIsVisible: PropTypes.bool.isRequired,
};

function mapStateToProps(state) {
  return {
    headerIsIntersecting: state.gui.headerIsIntersecting,
    menuIsVisible: state.gui.menuIsVisible,
  };
}

export default connect(mapStateToProps)(HeaderDisconnected);
