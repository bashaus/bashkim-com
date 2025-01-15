import "../libraries/sentry/init";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { PropsWithChildren } from "react";

import RootLayout from "../layouts/RootLayout";

export async function generateMetadata() {
  return {
    title: {
      default: "Bashkim Isai - Digital Nomad Technologist",
      template: "%s | Bashkim Isai",
    },
  };
}

export type MyLayoutProps = Readonly<PropsWithChildren>;

export default async function MyLayout({ children }: MyLayoutProps) {
  return (
    <html lang="en" dir="ltr">
      <body>
        <AppRouterCacheProvider>
          <RootLayout>{children}</RootLayout>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
