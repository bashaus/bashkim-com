import { Metadata } from "next";

import AboutPageLockup from "@/domains/about-page/lockups/AboutPageLockup";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "About",
    description: "Information on the work history of Bashkim Isai",
  };
}

export default async function AboutPage() {
  return <AboutPageLockup />;
}
