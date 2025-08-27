import { Metadata } from "next";

import AboutPageLockup from "@/domains/about-page/components/AboutPageLockup";
import pathAsUrl from "@/libraries/app/path-as-url";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "About",
    description: "Information on the work history of Bashkim Isai",
    alternates: {
      canonical: pathAsUrl("/about"),
    },
  };
}

export default async function AboutPage() {
  return <AboutPageLockup />;
}
