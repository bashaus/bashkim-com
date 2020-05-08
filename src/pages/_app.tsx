import App from 'next/app';
import React from 'react';
import * as Sentry from '@sentry/browser';

import config from '%config/index';
import TrackingSentryBoundary from '%components/TrackingSentryBoundary';

import '%styleguide/main.scss';

const sentryIsEnabled = config.sentry.enabled;
if (sentryIsEnabled) {
  Sentry.init({
    dsn: config.sentry.dsn,
    environment: config.sentry.environment,
    release: `${config.sentry.project}@${config.sentry.commit}`,
  });
}

export default class MyApp extends App {
  render(): JSX.Element {
    const { Component, pageProps } = this.props;

    return (
      <TrackingSentryBoundary>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...pageProps} />
      </TrackingSentryBoundary>
    );
  }
}
