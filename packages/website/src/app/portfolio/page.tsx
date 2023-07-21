import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { generateCanonical } from "../../libraries/app/generateCanonical";
import { PortfolioPageLockup } from "../../lockups/PortfolioPage";
import { getPrismicPage } from "./queries";

export const generateMetadata = async (): Promise<Metadata> => {
  const result = await getPrismicPage();
  const portfolioPage = result.data.portfolioPage.edges?.[0]?.node;
  if (!portfolioPage) {
    throw new Error("Edge not found");
  }

  return {
    title: portfolioPage.meta_title,
    keywords: portfolioPage.meta_keywords,
    description: portfolioPage.meta_description,
    alternates: {
      canonical: generateCanonical("/portfolio/"),
    },
  };
};

const PortfolioPage = async () => {
  const result = await getPrismicPage();
  const portfolioPage = result.data.portfolioPage.edges?.[0]?.node;
  if (!portfolioPage) {
    notFound();
  }

  return <PortfolioPageLockup portfolioPage={portfolioPage} />;
};

export default PortfolioPage;
