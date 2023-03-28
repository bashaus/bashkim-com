"use client";

import { MenuButtonHome } from "../../components/MenuButtonHome/MenuButtonHome";
import { Page } from "../../components/Page/Page";
import { CookiesDetails } from "./components/CookiesDetails/CookiesDetails";

export const CookiesPageLockup = () => (
  <Page backButton={MenuButtonHome}>
    <CookiesDetails />
  </Page>
);
