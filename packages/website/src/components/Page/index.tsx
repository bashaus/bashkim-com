import { PropsWithChildren } from "react";

import Footer from "@/components/Footer";
import MotionFadeIn from "@/components/MotionFadeIn";

export type PageProps = Readonly<PropsWithChildren>;

export default function Page({ children }: PageProps) {
  return (
    <MotionFadeIn>
      <main id="content" tabIndex={-1} style={{ position: "relative" }}>
        {children}
      </main>
      <Footer />
    </MotionFadeIn>
  );
}
