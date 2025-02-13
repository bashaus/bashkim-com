"use client";

import { HomePageModelFragment } from "@bashkim-com/prismic-dal";

import Page from "../../../../components/Page";
import HomeFeatured from "../HomeFeatured";
import HomeFooter from "../HomeFooter";
import HomeHello from "../HomeHello";

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
