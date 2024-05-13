"use client";

import "@bashkim-com/style-guide/normalize.scss";

import { LinkResolverContext } from "@bashkim-com/prismic-helpers";
import { PropsWithChildren, useEffect } from "react";

import { GoogleAnalytics } from "../../components/GoogleAnalytics";
import { NavigationProvider } from "../../contexts/Navigation/provider";
import { SettingsProvider } from "../../contexts/Settings/provider";
import { PrismicLinkResolver } from "../../libraries/prismic/PrismicLinkResolver";

export const RootLayout = ({ children }: PropsWithChildren) => {
  useEffect((): void => {
    document.documentElement.classList.add("isReady");
  }, []);

  return (
    <LinkResolverContext.Provider value={PrismicLinkResolver}>
      <SettingsProvider>
        <NavigationProvider>
          {children}

          <GoogleAnalytics />
        </NavigationProvider>
      </SettingsProvider>
    </LinkResolverContext.Provider>
  );
};
