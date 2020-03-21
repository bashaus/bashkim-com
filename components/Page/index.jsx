import Router from 'next/router';
import PropTypes from 'prop-types';
import React from 'react';

import Footer from '%components/Footer';
import Header from '%components/Header';
import HeaderIntersection from '%components/HeaderIntersection';
import Menu from '%components/Menu';

import { NavigationContext } from '%contexts/Navigation';
import * as NavigationActions from '%contexts/Navigation/actions';

import styles from './styles.module.scss';

export default class Page extends React.PureComponent {
  componentDidMount() {
    Router.events.on('routeChangeComplete', this.handleRouteChange);
  }

  componentWillUnmount() {
    Router.events.off('routeChangeComplete', this.handleRouteChange);
  }

  handleRouteChange = (url) => {
    const { dispatch } = this.context;
    dispatch({ type: NavigationActions.HIDE });
  }

  render() {
    const {
      backButton, children, theme,
    } = this.props;
    const { state: navigationState } = this.context;

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
  }
}

Page.contextType = NavigationContext;

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
