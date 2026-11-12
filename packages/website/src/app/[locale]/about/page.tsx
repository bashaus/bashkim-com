import { Metadata } from "next";
import { notFound } from "next/navigation";

import AboutPageLockup from "@/domains/about-page/lockups/AboutPageLockup";
import { getLocaleFromPath } from "@/i18n/locale/source/path/get";
import { getAboutPath } from "@/libraries/app/navigation";
import { pathAsUrl } from "@/libraries/app/path-as-url";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocaleFromPath().catch(() => notFound());

  return {
    title: "About",
    description: "Information on the work history of Bashkim Isai",
    alternates: {
      canonical: pathAsUrl(getAboutPath({ locale })),
    },
  };
}

export default async function AboutPage() {
  return <AboutPageLockup />;
}
