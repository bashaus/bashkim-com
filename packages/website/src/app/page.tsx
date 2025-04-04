import { Metadata } from "next";

import HomePageLockup from "@/domains/home-page/components/HomePageLockup";
import generateCanonical from "@/libraries/app/generateCanonical";

import { getPrismicPage } from "./queries";

export const generateMetadata = async (): Promise<Metadata> => {
  const result = await getPrismicPage();
  const homePage = result.data.homePage.edges?.[0]?.node;
  if (!homePage) {
    throw new Error("Edge not found");
  }

  return {
    title: homePage.meta_title,
    description: homePage.meta_description,
    alternates: {
      canonical: generateCanonical("/"),
    },
  };
};

const HomePage = async () => {
  return <HomePageLockup />;
};

export default HomePage;
