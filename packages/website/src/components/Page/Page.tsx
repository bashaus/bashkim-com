import { ReactNode } from "react";

import { Footer } from "../../components/Footer/Footer";
import { GridLines } from "../../components/GridLines/GridLines";
import { Header } from "../../components/Header/Header";
import { HeaderIntersection } from "../../components/HeaderIntersection/HeaderIntersection";

export type PageProps = {
  backButton?: ReactNode;
  children?: ReactNode;
};

export const Page = ({ backButton, children }: PageProps) => (
  <>
    <HeaderIntersection />
    <Header backButton={backButton} />
    <main id="content" tabIndex={-1}>
      {children}
    </main>
    <Footer />
    <GridLines />
  </>
);
