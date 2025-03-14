"use client";

import MenuButtonHome from "@/components/MenuButtonHome";
import Page from "@/components/Page";
import CookiesDetails from "@/domains/cookies-page/components/CookiesDetails";

export default function CookiesPageLockup() {
  return (
    <Page backButton={<MenuButtonHome />}>
      <CookiesDetails />
    </Page>
  );
}
