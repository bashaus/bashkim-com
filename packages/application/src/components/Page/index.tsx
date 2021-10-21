import { ReactNode } from "react";

import { Footer } from "%components/Footer";
import { Header } from "%components/Header";
import { HeaderIntersection } from "%components/HeaderIntersection";

export type PageProps = {
  backButton?: ReactNode;
  children?: ReactNode;
};

export const Page = ({ backButton, children }: PageProps): JSX.Element => (
  <>
    <HeaderIntersection />
    <Header backButton={backButton} />
    <main id="content" tabIndex={-1}>
      {children}
    </main>
    <Footer />
  </>
);
