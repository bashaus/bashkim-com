"use client";

import HeaderDesktop from "@/components/HeaderDesktop";
import HeaderIntersection from "@/components/HeaderIntersection";
import HeaderMobile from "@/components/HeaderMobile";
import Page from "@/components/Page";
import HomeFeatured from "@/domains/home-page/components/HomeFeatured";
import HomeHello from "@/domains/home-page/components/HomeHello";
import HomeOpenSource from "@/domains/home-page/components/HomeOpenSource";

export default function HomePageLockup() {
  return (
    <Page>
      <HeaderMobile />
      <HomeHello />
      <HeaderIntersection variant="sticky" />
      <HeaderDesktop variant="base" />
      <HomeOpenSource />
      <HomeFeatured />
    </Page>
  );
}
