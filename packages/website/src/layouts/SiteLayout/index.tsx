"use client";

import "@bashkim-com/style-guide";

import { LinkResolverContext } from "@bashkim-com/prismic-helpers";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { type PropsWithChildren } from "react";

import GridLines from "@/components/GridLines";
import ToastController from "@/components/ToastController";
import NavigationProvider from "@/contexts/Navigation/provider";
import { useCookiesToast } from "@/domains/cookies-page/hooks/use-cookies-toast";
import SiteSettingsProvider from "@/domains/site-settings/contexts/SiteSettings/provider";
import theme from "@/libraries/material-ui/theme";
import PrismicLinkResolver from "@/libraries/prismic/PrismicLinkResolver";

export type SiteLayoutProps = Readonly<PropsWithChildren>;

export default function SiteLayout({ children }: SiteLayoutProps) {
  useCookiesToast();

  return (
    <SiteSettingsProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <LinkResolverContext.Provider value={PrismicLinkResolver}>
          <NavigationProvider>
            {children}
            <GridLines />
          </NavigationProvider>
        </LinkResolverContext.Provider>
        <ToastController />
      </ThemeProvider>
    </SiteSettingsProvider>
  );
}
