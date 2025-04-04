import type { Metadata } from "next";
import { notFound } from "next/navigation";

import PortfolioPageLockup from "@/domains/portfolio-page/components/PortfolioPageLockup";
import generateCanonical from "@/libraries/app/generateCanonical";

import { getPrismicPage } from "./queries";

export async function generateMetadata(): Promise<Metadata> {
  const result = await getPrismicPage();
  const portfolioPage = result.data.portfolioPage.edges?.[0]?.node;
  if (!portfolioPage) {
    throw new Error("Edge not found");
  }

  return {
    title: portfolioPage.meta_title,
    description: portfolioPage.meta_description,
    alternates: {
      canonical: generateCanonical("/portfolio"),
    },
  };
}

export default async function PortfolioPage() {
  const result = await getPrismicPage();
  const portfolioPage = result.data.portfolioPage.edges?.[0]?.node;
  if (!portfolioPage) {
    notFound();
  }

  return <PortfolioPageLockup portfolioPage={portfolioPage} />;
}
