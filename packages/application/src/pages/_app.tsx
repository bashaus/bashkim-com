import "%libraries/sentry/init";

import { LinkResolverContext } from "@bashkim-com/prismic";
import { AppProps } from "next/app";
import Head from "next/head";
import { useEffect } from "react";

import { GoogleAnalytics } from "%components/GoogleAnalytics";
import { SentryBoundary } from "%components/SentryBoundary";
import { NavigationProvider } from "%contexts/Navigation/provider";
import { PrismicLinkResolver } from "%libraries/prismic/link-resolver";

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  useEffect((): void => {
    document.documentElement.classList.add("isReady");
  }, []);

  return (
    <SentryBoundary>
      <LinkResolverContext.Provider value={PrismicLinkResolver}>
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
      </LinkResolverContext.Provider>
    </SentryBoundary>
  );
};

export default App;
