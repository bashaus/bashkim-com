import Router from 'next/router';
import PropTypes from 'prop-types';
import React, { useContext, useEffect } from 'react';

import Footer from '%components/Footer';
import Header from '%components/Header';
import HeaderIntersection from '%components/HeaderIntersection';
import Menu from '%components/Menu';

import { NavigationContext } from '%contexts/Navigation';
import * as NavigationActions from '%contexts/Navigation/actions';

import styles from './styles.module.scss';

const Page = ({ backButton, children, theme }) => {
  const { state: navigationState, dispatch: navigationDispatch } = useContext(NavigationContext);

  const handleRouteChange = (/* url */) => {
    navigationDispatch({ type: NavigationActions.HIDE });
  };

  useEffect(() => {
    Router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      Router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, []);

  return (
    <>
      <HeaderIntersection />
      <Header theme={theme} />

      <div
        className={`
          ${styles.menuSignified}
          ${navigationState.isVisible ? styles.menuIsVisible : ''}
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
    </>
  );
};

Page.propTypes = {
  backButton: PropTypes.node,
  children: PropTypes.node,
  theme: PropTypes.string,
};

Page.defaultProps = {
  backButton: null,
  children: null,
  theme: 'default',
};

export default Page;
