import { PropsWithChildren, ReactNode } from "react";

import Footer from "../Footer";
import GridLines from "../GridLines";
import Header from "../Header";
import HeaderIntersection from "../HeaderIntersection";

export type PageProps = Readonly<
  PropsWithChildren<{
    backButton?: ReactNode;
  }>
>;

export default function Page({ backButton, children }: PageProps) {
  return (
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
}
