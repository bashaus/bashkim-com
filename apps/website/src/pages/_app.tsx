import "../libraries/sentry/init";

import { LinkResolverContext } from "@bashkim-com/prismic-helpers";
import { Normalize } from "@bashkim-com/style-guide";
import { AppProps } from "next/app";
import Head from "next/head";
import { useEffect } from "react";

import { GoogleAnalytics } from "../components/GoogleAnalytics/GoogleAnalytics";
import { SentryBoundary } from "../components/SentryBoundary/SentryBoundary";
import { NavigationProvider } from "../contexts/Navigation/Navigation.provider";
import { SettingsProvider } from "../contexts/Settings/Settings.provider";
import { PrismicLinkResolver } from "../libraries/prismic/PrismicLinkResolver";

function MyApplication({ Component, pageProps }: AppProps) {
  useEffect((): void => {
    document.documentElement.classList.add("isReady");
  }, []);

  return (
    <SentryBoundary>
      <Head>
        <meta
          key="MyApplication.viewport"
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
      </Head>

      <Normalize key="Normalize" />

      <LinkResolverContext.Provider value={PrismicLinkResolver}>
        <SettingsProvider>
          <NavigationProvider>
            <Component {...pageProps} />
          </NavigationProvider>
        </SettingsProvider>
      </LinkResolverContext.Provider>

      <GoogleAnalytics />
    </SentryBoundary>
  );
}

export default MyApplication;
