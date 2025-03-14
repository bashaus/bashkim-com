"use client";

import { HomePageModelFragment } from "@bashkim-com/prismic-dal";

import Page from "@/components/Page";
import HomeFeatured from "@/domains/home-page/components/HomeFeatured";
import HomeFooter from "@/domains/home-page/components/HomeFooter";
import HomeHello from "@/domains/home-page/components/HomeHello";

type HomePageLockupProps = Readonly<{
  homePage: HomePageModelFragment;
}>;

export default function HomePageLockup({ homePage }: HomePageLockupProps) {
  return (
    <Page>
      <HomeHello />
      <HomeFeatured featuredCaseStudies={homePage.featured_case_studies} />
      <HomeFooter />
    </Page>
  );
}
