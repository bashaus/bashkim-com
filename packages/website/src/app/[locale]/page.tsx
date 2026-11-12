import { Metadata } from "next";
import { notFound } from "next/navigation";

import HomePageLockup from "@/domains/home-page/lockups/HomePageLockup";
import { getHomePage } from "@/domains/home-page/queries/get-home-page";
import { locales } from "@/i18n/locale/locale";
import { getLocaleFromPath } from "@/i18n/locale/source/path/get";
import { getHomePath } from "@/libraries/app/navigation";
import { pathAsUrl } from "@/libraries/app/path-as-url";

export const generateStaticParams = async () => {
  return locales.map((locale) => ({ locale }));
};

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocaleFromPath().catch(() => notFound());

  const result = await getHomePage();
  const homePage = result.data?.homePage.edges?.[0]?.node;
  if (!homePage) {
    throw new Error("Edge not found");
  }

  return {
    title: homePage.meta_title,
    description: homePage.meta_description,
    alternates: {
      canonical: pathAsUrl(getHomePath({ locale })),
    },
  };
}

export default async function HomePage() {
  return <HomePageLockup />;
}
