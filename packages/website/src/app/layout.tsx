import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { GoogleAnalytics } from "@next/third-parties/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Metadata } from "next";
import type { PropsWithChildren, ReactNode } from "react";

import SiteLayout from "@/layouts/SiteLayout";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: {
      default: "Bashkim Isai - Digital Technologist",
      template: "%s | Bashkim Isai",
    },
  };
}

export type RootLayoutProps = Readonly<
  PropsWithChildren<{
    socialModals: ReactNode;
  }>
>;

export default async function RootLayout({
  children,
  socialModals,
}: RootLayoutProps) {
  const {
    APP_GOOGLE_ANALYTICS_ENABLED = "0",
    APP_GOOGLE_ANALYTICS_MEASUREMENT_ID,
  } = process.env;

  const isGoogleAnalyticsConfigured =
    APP_GOOGLE_ANALYTICS_ENABLED !== "0" &&
    !!APP_GOOGLE_ANALYTICS_MEASUREMENT_ID;

  return (
    <html lang="en" dir="ltr">
      {isGoogleAnalyticsConfigured && (
        <GoogleAnalytics gaId={APP_GOOGLE_ANALYTICS_MEASUREMENT_ID} />
      )}

      <body>
        <AppRouterCacheProvider>
          <SiteLayout>
            {children}
            {socialModals}
          </SiteLayout>
        </AppRouterCacheProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
