import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import '%styleguide/main.scss';

import CookiesNotice from '%components/CookiesNotice';
import Footer from '%components/Footer';
import Header from '%components/Header';
import HeaderIntersection from '%components/HeaderIntersection';
import Menu from '%components/Menu';

import styles from './styles.scss';

export function LayoutDefaultDisconnected(props) {
  const {
    backButton, children, menuIsVisible, theme,
  } = props;

  if (typeof document !== 'undefined') {
    document.documentElement.classList.remove('no-js');
    document.documentElement.classList.add('js');
  }

  if (typeof window !== 'undefined') {
    window.requestAnimationFrame(() => {
      document.documentElement.classList.add('ready');
    });
  }

  return (
    <React.Fragment>
      <HeaderIntersection />
      <CookiesNotice />
      <Header theme={theme} />

      <div
        className={`
          ${styles.menuSignified}
          ${menuIsVisible ? styles.menuIsVisible : ''}
        `}
      >
        <div className={styles.menu}>
          <Menu backButton={backButton} />
        </div>

        <main
          id="content"
          className={`${styles.content} ${styles[`theme-${theme}`]}`}
          tabIndex="-1"
        >
          { children }
        </main>

        <Footer />
      </div>
    </React.Fragment>
  );
}

LayoutDefaultDisconnected.propTypes = {
  backButton: PropTypes.node,
  children: PropTypes.node,
  menuIsVisible: PropTypes.bool.isRequired,
  theme: PropTypes.string,
};

LayoutDefaultDisconnected.defaultProps = {
  backButton: null,
  children: null,
  theme: 'default',
};

function mapStateToProps(state) {
  return {
    menuIsVisible: state.menu.isVisible,
  };
}

export default connect(mapStateToProps)(LayoutDefaultDisconnected);
