import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import type { PropsWithChildren, ReactNode } from "react";

import GoogleAnalyticsTag from "@/components/GoogleAnalyticsTag";
import { defaultLocale } from "@/i18n/locale/locale";
import { getLocaleFromPath } from "@/i18n/locale/source/path/get";
import SiteLayout from "@/layouts/SiteLayout";

export type RootLayoutProps = Readonly<
  PropsWithChildren<{
    socialModals: ReactNode;
  }>
>;

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: {
      default: "Bashkim Isai - Digital Technologist",
      template: "%s | Bashkim Isai",
    },
  };
}

export default async function RootLayout({
  children,
  socialModals,
}: RootLayoutProps) {
  const locale = await getLocaleFromPath().catch(() => defaultLocale);

  return (
    <html lang={locale} dir="ltr">
      <GoogleAnalyticsTag />
      <body>
        <NextIntlClientProvider>
          <AppRouterCacheProvider>
            <SiteLayout>
              {children}
              {socialModals}
            </SiteLayout>
          </AppRouterCacheProvider>
        </NextIntlClientProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
