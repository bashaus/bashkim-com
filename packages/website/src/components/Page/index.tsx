import { PropsWithChildren } from "react";

import Footer from "@/components/Footer";

export type PageProps = Readonly<PropsWithChildren>;

export default function Page({ children }: PageProps) {
  return (
    <>
      <main id="content" tabIndex={-1} style={{ position: "relative" }}>
        {children}
      </main>
      <Footer />
    </>
  );
}
