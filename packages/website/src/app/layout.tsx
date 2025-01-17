import "../libraries/sentry/init";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import type { PropsWithChildren, ReactNode } from "react";

import SiteLayout from "../layouts/SiteLayout";

export async function generateMetadata() {
  return {
    title: {
      default: "Bashkim Isai - Digital Nomad Technologist",
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
      <body>
        <AppRouterCacheProvider>
          <SiteLayout>
            {children}
            {socialModals}
          </SiteLayout>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
