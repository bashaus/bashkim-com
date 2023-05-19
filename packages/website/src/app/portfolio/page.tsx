import type { Metadata } from "next";

import { generateCanonical } from "../../libraries/app/generateCanonical";
import { NotFoundError } from "../../libraries/next/errors/NotFoundError";
import { PortfolioPageLockup } from "../../lockups/PortfolioPage";
import { getPrismicPage } from "./queries";

export async function generateMetadata(): Promise<Metadata> {
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
}

export async function PortfolioPage() {
  const result = await getPrismicPage();
  const portfolioPage = result.data.portfolioPage.edges?.[0]?.node;
  if (!portfolioPage) {
    throw new NotFoundError();
  }

  return <PortfolioPageLockup portfolioPage={portfolioPage} />;
}

export default PortfolioPage;
