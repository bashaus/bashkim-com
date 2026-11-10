import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Metadata } from "next";
import { headers } from "next/headers";
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
  const headerList = await headers();
  console.log("x-locale-cookie:", headerList.get("x-locale-cookie"));
  console.log("x-locale-path:", headerList.get("x-locale-path"));
  console.log("x-locale-accept:", headerList.get("x-locale-accept"));
  console.log("x-locale-vercel:", headerList.get("x-locale-vercel"));

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
