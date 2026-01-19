import { Metadata } from "next";

import HomePageLockup from "@/domains/home-page/lockups/HomePageLockup";
import { getHomePage } from "@/domains/home-page/queries/get-home-page";
import { getHomePath } from "@/libraries/app/navigation";
import { pathAsUrl } from "@/libraries/app/path-as-url";

export async function generateMetadata(): Promise<Metadata> {
  const result = await getHomePage();
  const homePage = result.data.homePage.edges?.[0]?.node;
  if (!homePage) {
    throw new Error("Edge not found");
  }

  return {
    title: homePage.meta_title,
    description: homePage.meta_description,
    alternates: {
      canonical: pathAsUrl(getHomePath()),
    },
  };
}

const HomePage = async () => {
  return <HomePageLockup />;
};

export default HomePage;
