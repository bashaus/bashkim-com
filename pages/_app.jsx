import App from 'next/app';
import getConfig from 'next/config';
import React from 'react';
import * as Sentry from '@sentry/browser';

import TrackingSentryBoundary from '%components/TrackingSentryBoundary';

import '%styleguide/main.scss';

const { publicRuntimeConfig } = getConfig();

const sentryIsEnabled = publicRuntimeConfig.sentry.enabled;
if (sentryIsEnabled) {
  Sentry.init({
    dsn: publicRuntimeConfig.sentry.dsn,
    environment: publicRuntimeConfig.sentry.environment,
    release: `${publicRuntimeConfig.sentry.project}@${publicRuntimeConfig.sentry.commit}`,
  });
}

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    const getLayout = Component.getLayout || ((page) => page);
    const Layout = getLayout(
      /* eslint-disable-next-line react/jsx-props-no-spreading */
      <Component {...pageProps} />,
    );

    return (
      <TrackingSentryBoundary>
        { Layout }
      </TrackingSentryBoundary>
    );
  }
}
