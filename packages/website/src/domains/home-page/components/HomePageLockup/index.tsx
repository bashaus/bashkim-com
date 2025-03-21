"use client";

import Page from "@/components/Page";
import HomeFeatured from "@/domains/home-page/components/HomeFeatured";
import HomeHello from "@/domains/home-page/components/HomeHello";

export default function HomePageLockup() {
  return (
    <Page>
      <HomeHello />
      <HomeFeatured />
    </Page>
  );
}
