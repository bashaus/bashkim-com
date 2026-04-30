import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Metadata } from "next";
import type { PropsWithChildren, ReactNode } from "react";

import GoogleAnalyticsTag from "@/components/GoogleAnalyticsTag";
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
  return (
    <html lang="en" dir="ltr">
      <GoogleAnalyticsTag />
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
