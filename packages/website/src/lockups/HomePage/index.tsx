"use client";

import { HomePageModelFragment } from "@bashkim-com/prismic-dal";

import { Page } from "../../components/Page/Page";
import { HomeFeatured } from "./components/HomeFeatured/HomeFeatured";
import { HomeFooter } from "./components/HomeFooter/HomeFooter";
import { HomeHello } from "./components/HomeHello/HomeHello";

type HomePageLockupProps = {
  homePage: HomePageModelFragment;
};

export const HomePageLockup = ({ homePage }: HomePageLockupProps) => (
  <Page>
    <HomeHello />
    <HomeFeatured featuredCaseStudies={homePage.featured_case_studies} />
    <HomeFooter />
  </Page>
);
