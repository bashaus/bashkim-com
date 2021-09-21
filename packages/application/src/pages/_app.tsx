import { AppProps } from "next/app";
import Head from "next/head";
import { useEffect } from "react";

import "%libraries/sentry/init";

import { NavigationProvider } from "%contexts/Navigation/provider";

import { GoogleAnalytics } from "%components/GoogleAnalytics";
import { SentryBoundary } from "%components/SentryBoundary";

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  useEffect((): void => {
    document.documentElement.classList.add("isReady");
  }, []);

  return (
    <SentryBoundary>
      <Head>
        <meta
          key="MyDocument.viewport"
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
      </Head>

      <NavigationProvider>
        <Component {...pageProps} />
      </NavigationProvider>

      <GoogleAnalytics />
    </SentryBoundary>
  );
};

export default MyApp;
