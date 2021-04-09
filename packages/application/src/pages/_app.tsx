import { AppProps } from "next/app";
import Head from "next/head";
import React from "react";

import "%libraries/sentry/init";
import SentryBoundary from "%components/SentryBoundary";

import "%styleguide/main.scss";

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => (
  <SentryBoundary>
    <Head>
      <meta
        key="MyDocument.viewport"
        name="viewport"
        content="width=device-width, initial-scale=1, viewport-fit=cover"
      />
    </Head>
    <Component {...pageProps} />
  </SentryBoundary>
);

export default MyApp;
