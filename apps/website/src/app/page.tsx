import { Metadata } from "next";

import { generateCanonical } from "../libraries/app/generateCanonical";
import { HomePageLockup } from "../lockups/HomePage";
import { getPrismicPage } from "./queries";

export async function generateMetadata(): Promise<Metadata> {
  const result = await getPrismicPage();
  const homePage = result.data.homePage.edges?.[0]?.node;
  if (!homePage) {
    throw new Error("Edge not found");
  }

  return {
    title: homePage.meta_title,
    keywords: homePage.meta_keywords,
    description: homePage.meta_description,
    alternates: {
      canonical: generateCanonical("/"),
    },
  };
}

export default async function HomePage() {
  const result = await getPrismicPage();
  return <HomePageLockup homePageResult={result.data} />;
}
