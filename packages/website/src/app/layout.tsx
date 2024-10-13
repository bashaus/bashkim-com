import "../libraries/sentry/init";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { PropsWithChildren } from "react";

import { RootLayout } from "../layouts/RootLayout";

export const metadata = {
  title: {
    default: "Bashkim Isai - Creative Technologist",
    template: "%s | Bashkim Isai",
  },
};

const MyLayout = ({ children }: PropsWithChildren) => (
  <html lang="en" dir="ltr">
    <body>
      <AppRouterCacheProvider>
        <RootLayout>{children}</RootLayout>
      </AppRouterCacheProvider>
    </body>
  </html>
);

export default MyLayout;
