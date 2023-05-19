"use client";

import {
  GetHomePageQuery,
  Home_PageFeatured_Case_Studies,
} from "@bashkim-com/prismic-dal";

import { Page } from "../../components/Page/Page";
import { HomeFeatured } from "./components/HomeFeatured/HomeFeatured";
import { HomeFooter } from "./components/HomeFooter/HomeFooter";
import { HomeHello } from "./components/HomeHello/HomeHello";

type HomePageLockupProps = {
  homePageResult: GetHomePageQuery;
};

export const HomePageLockup = ({ homePageResult }: HomePageLockupProps) => {
  const homePage = homePageResult.homePage.edges?.[0]?.node;
  if (!homePage) {
    return null;
  }

  const { featured_case_studies: featuredCaseStudies } = homePage;

  return (
    <Page>
      <HomeHello />
      <HomeFeatured
        caseStudies={
          featuredCaseStudies as Array<Home_PageFeatured_Case_Studies>
        }
      />
      <HomeFooter />
    </Page>
  );
};
