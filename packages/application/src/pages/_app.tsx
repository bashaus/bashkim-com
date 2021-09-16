import { AppProps } from "next/app";
import Head from "next/head";

import "%libraries/sentry/init";
import { SentryBoundary } from "%components/SentryBoundary";
import { NavigationProvider } from "%contexts/Navigation/provider";

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => (
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
  </SentryBoundary>
);

export default MyApp;
