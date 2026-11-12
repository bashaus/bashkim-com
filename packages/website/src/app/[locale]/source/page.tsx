import type { Metadata } from "next";
import { notFound } from "next/navigation";

import SourcePageLockup from "@/domains/source-page/lockups/SourcePageLockup";
import { locales } from "@/i18n/locale/locale";
import { getLocaleFromPath } from "@/i18n/locale/source/path/get";
import { getSourcePath } from "@/libraries/app/navigation";
import { pathAsUrl } from "@/libraries/app/path-as-url";

export const generateStaticParams = async () => {
  return locales.map((locale) => ({ locale }));
};

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocaleFromPath().catch(() => notFound());

  return {
    title: "Source",
    description: "See how this website has been put together",
    alternates: {
      canonical: pathAsUrl(getSourcePath({ locale })),
    },
  };
}

export default async function SourcePage() {
  return <SourcePageLockup />;
}
