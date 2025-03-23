"use client";

import Header from "@/components/Header";
import HeaderActionHome from "@/components/HeaderActionHome";
import Page from "@/components/Page";
import CookiesDetails from "@/domains/cookies-page/components/CookiesDetails";

export default function CookiesPageLockup() {
  return (
    <Page>
      <Header backButton={<HeaderActionHome />} />
      <CookiesDetails />
    </Page>
  );
}
