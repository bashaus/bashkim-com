import { Metadata } from "next";

import AboutPageLockup from "@/domains/about-page/lockups/AboutPageLockup";
import { getAboutPath } from "@/libraries/app/navigation";
import { pathAsUrl } from "@/libraries/app/path-as-url";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "About",
    description: "Information on the work history of Bashkim Isai",
    alternates: {
      canonical: pathAsUrl(getAboutPath()),
    },
  };
}

export default async function AboutPage() {
  return <AboutPageLockup />;
}
