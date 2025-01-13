"use client";

import MenuButtonHome from "../../../../components/MenuButtonHome";
import Page from "../../../../components/Page";
import CookiesDetails from "../CookiesDetails";

export default function CookiesPageLockup() {
  return (
    <Page backButton={<MenuButtonHome />}>
      <CookiesDetails />
    </Page>
  );
}
