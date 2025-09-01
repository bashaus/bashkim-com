"use client";

import LinkResolverContext from "@bashkim-com/design-system/LinkResolver";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { type PropsWithChildren } from "react";

import GridLines from "@/components/GridLines";
import ToastController from "@/components/ToastController";
import NavigationProvider from "@/domains/navigation/components/Navigation/provider";
import SiteSettingsProvider from "@/domains/site-settings/contexts/SiteSettings/provider";
import theme from "@/libraries/material-ui/theme";
import linkResolver from "@/libraries/prismic/link-resolver";

export type SiteLayoutProps = Readonly<PropsWithChildren>;

export default function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <SiteSettingsProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <LinkResolverContext.Provider value={linkResolver}>
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
