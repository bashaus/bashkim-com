import type { Metadata } from "next";
import { notFound } from "next/navigation";

import PortfolioPageLockup from "@/domains/portfolio-page/lockups/PortfolioPageLockup";
import { getPortfolioPage } from "@/domains/portfolio-page/queries/get-portfolio-page";
import { locales } from "@/i18n/locale/locale";
import { getLocaleFromPath } from "@/i18n/locale/source/path/get";
import { getPortfolioPath } from "@/libraries/app/navigation";
import { pathAsUrl } from "@/libraries/app/path-as-url";

export const generateStaticParams = async () => {
  return locales.map((locale) => ({ locale }));
};

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocaleFromPath().catch(() => notFound());
  const getPortfolioPageResult = await getPortfolioPage();
  const portfolioPage =
    getPortfolioPageResult.data?.portfolioPage.edges?.[0]?.node;

  if (!portfolioPage) {
    throw new Error("Edge not found");
  }

  return {
    title: portfolioPage.meta_title,
    description: portfolioPage.meta_description,
    alternates: {
      canonical: pathAsUrl(getPortfolioPath({ locale })),
    },
  };
}

export default async function PortfolioPage() {
  const getPortfolioPageResult = await getPortfolioPage();
  const portfolioPage =
    getPortfolioPageResult.data?.portfolioPage.edges?.[0]?.node;

  if (!portfolioPage) {
    notFound();
  }

  return <PortfolioPageLockup portfolioPage={portfolioPage} />;
}
