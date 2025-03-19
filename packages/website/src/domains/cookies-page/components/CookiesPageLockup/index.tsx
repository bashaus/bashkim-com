"use client";

import HeaderActionHome from "@/components/HeaderActionHome";
import Page from "@/components/Page";
import CookiesDetails from "@/domains/cookies-page/components/CookiesDetails";

export default function CookiesPageLockup() {
  return (
    <Page backButton={<HeaderActionHome />}>
      <CookiesDetails />
    </Page>
  );
}
