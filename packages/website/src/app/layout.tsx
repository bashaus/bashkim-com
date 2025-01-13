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

export default async function MyLayout({ children }: PropsWithChildren) {
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
