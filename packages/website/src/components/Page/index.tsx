import { PropsWithChildren, ReactNode } from "react";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MotionFadeIn from "@/components/MotionFadeIn";

export type PageProps = Readonly<
  PropsWithChildren<{
    backButton?: ReactNode;
  }>
>;

export default function Page({ backButton, children }: PageProps) {
  return (
    <MotionFadeIn>
      <Header backButton={backButton} />
      <main id="content" tabIndex={-1}>
        {children}
      </main>
      <Footer />
    </MotionFadeIn>
  );
}
