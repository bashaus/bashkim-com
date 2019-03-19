import App from 'next/app';
import Router from 'next/router';
import getConfig from 'next/config';
import { Provider } from 'react-redux';
import React from 'react';
import * as Sentry from '@sentry/browser';
import withReduxStore from 'store/next';

import * as PrismicActions from '%prismic/store/actions';
import * as RouterActions from '%actions/router';

import TrackingSentryBoundary from '%components/TrackingSentryBoundary';

const { publicRuntimeConfig } = getConfig();

const sentryIsEnabled = publicRuntimeConfig.sentry.enabled;
if (sentryIsEnabled) {
  Sentry.init({
    dsn: publicRuntimeConfig.sentry.dsn,
    environment: publicRuntimeConfig.sentry.environment,
    release: `${publicRuntimeConfig.sentry.project}@${publicRuntimeConfig.sentry.commit}`,
  });
}

class MyApp extends App {
  componentDidMount() {
    const { reduxStore } = this.props;

    // Router actions
    Router.events.on('routeChangeStart', (url) => {
      RouterActions.changeStart({ url })(reduxStore.dispatch);
    });

    Router.events.on('routeChangeComplete', (url) => {
      RouterActions.changeComplete({ url })(reduxStore.dispatch);
    });

    Router.events.on('routeChangeError', (err, url) => {
      RouterActions.changeStart({ err, url })(reduxStore.dispatch);
    });

    // Prismic actions
    PrismicActions.previewDetect()(reduxStore.dispatch);
  }

  render() {
    const { Component, pageProps, reduxStore } = this.props;
    return (
      <TrackingSentryBoundary>
        <Provider store={reduxStore}>
          <Component {...pageProps} />
        </Provider>
      </TrackingSentryBoundary>
    );
  }
}

export default withReduxStore(MyApp);
