import App, { Container } from 'next/app';
import getConfig from 'next/config';
import { Provider } from 'react-redux';
import React from 'react';
import * as Sentry from '@sentry/browser';
import withReduxStore from 'store/next';

import TrackingSentryBoundary from 'components/TrackingSentryBoundary';

const { publicRuntimeConfig } = getConfig();

const sentryDsn = publicRuntimeConfig.sentry.dsn;
if (sentryDsn) {
  Sentry.init({
    dsn: publicRuntimeConfig.sentry.dsn,
  });
}

class MyApp extends App {
  render() {
    const { Component, pageProps, reduxStore } = this.props;
    return (
      <TrackingSentryBoundary>
        <Container>
          <Provider store={reduxStore}>
            <Component {...pageProps} />
          </Provider>
        </Container>
      </TrackingSentryBoundary>
    );
  }
}

export default withReduxStore(MyApp);
