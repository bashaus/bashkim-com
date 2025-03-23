"use client";

import HeaderDesktop from "@/components/HeaderDesktop";
import HeaderMobile from "@/components/HeaderMobile";
import Page from "@/components/Page";
import HomeFeatured from "@/domains/home-page/components/HomeFeatured";
import HomeHello from "@/domains/home-page/components/HomeHello";

export default function HomePageLockup() {
  return (
    <Page>
      <HeaderMobile />
      <HomeHello />
      <HeaderDesktop variant="base" />
      <HomeFeatured />
    </Page>
  );
}
