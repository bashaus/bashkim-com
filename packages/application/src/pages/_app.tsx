import App from "next/app";
import React from "react";

import "%libraries/sentry/init";
import SentryBoundary from "%components/SentryBoundary";

import "%styleguide/main.scss";

export default class MyApp extends App {
  render(): JSX.Element {
    const { Component, pageProps } = this.props;

    return (
      <SentryBoundary>
        <Component {...pageProps} />
      </SentryBoundary>
    );
  }
}
