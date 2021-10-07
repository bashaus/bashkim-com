import { ReactNode } from "react";
import { HeaderIntersection } from "%components/HeaderIntersection";
import { Header } from "%components/Header";
import { Footer } from "%components/Footer";

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
