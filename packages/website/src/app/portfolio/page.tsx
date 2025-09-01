import type { Metadata } from "next";
import { notFound } from "next/navigation";

import PortfolioPageLockup from "@/domains/portfolio-page/components/PortfolioPageLockup";
import { getPortfolioPage } from "@/domains/portfolio-page/queries/get-portfolio-page";

export async function generateMetadata(): Promise<Metadata> {
  const result = await getPortfolioPage();
  const portfolioPage = result.data.portfolioPage.edges?.[0]?.node;
  if (!portfolioPage) {
    throw new Error("Edge not found");
  }

  return {
    title: portfolioPage.meta_title,
    description: portfolioPage.meta_description,
  };
}

export default async function PortfolioPage() {
  const result = await getPortfolioPage();
  const portfolioPage = result.data.portfolioPage.edges?.[0]?.node;
  if (!portfolioPage) {
    notFound();
  }

  return <PortfolioPageLockup portfolioPage={portfolioPage} />;
}
