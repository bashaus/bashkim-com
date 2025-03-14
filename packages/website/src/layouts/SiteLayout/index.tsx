"use client";

import "@bashkim-com/style-guide/normalize.scss";

import { LinkResolverContext } from "@bashkim-com/prismic-helpers";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import type { PropsWithChildren } from "react";

import NavigationProvider from "@/contexts/Navigation/provider";
import SiteSettingsProvider from "@/domains/site-settings/contexts/SiteSettings/provider";
import theme from "@/libraries/material-ui/theme";
import PrismicLinkResolver from "@/libraries/prismic/PrismicLinkResolver";

export type SiteLayoutProps = Readonly<PropsWithChildren>;

export default function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <SiteSettingsProvider>
      <ThemeProvider theme={theme}>
        <LinkResolverContext.Provider value={PrismicLinkResolver}>
          <NavigationProvider>{children}</NavigationProvider>
        </LinkResolverContext.Provider>
      </ThemeProvider>
    </SiteSettingsProvider>
  );
}
