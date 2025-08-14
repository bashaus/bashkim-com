import { Metadata } from "next";

import AboutPageLockup from "@/domains/about-page/components/AboutPageLockup";
import generateCanonical from "@/libraries/app/generate-canonical";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "About",
    description: "Information on the work history of Bashkim Isai",
    alternates: {
      canonical: generateCanonical("/about"),
    },
  };
}

export default async function AboutPage() {
  return <AboutPageLockup />;
}
