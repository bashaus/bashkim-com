import "../libraries/sentry/init";

import { PropsWithChildren } from "react";

import { RootLayout } from "../layouts/RootLayout";
import ThemeRegistry from "../libraries/material-ui/ThemeRegistry";

export const metadata = {
  title: {
    default: "Bashkim Isai - Creative Technologist",
    template: "%s | Bashkim Isai",
  },
};

const MyLayout = ({ children }: PropsWithChildren) => (
  <html lang="en" dir="ltr">
    <body>
      <ThemeRegistry options={{ key: "mui" }}>
        <RootLayout>{children}</RootLayout>
      </ThemeRegistry>
    </body>
  </html>
);

export default MyLayout;
