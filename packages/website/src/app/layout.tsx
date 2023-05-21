import "../libraries/sentry/init";

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
      <RootLayout>{children}</RootLayout>
    </body>
  </html>
);

export default MyLayout;
