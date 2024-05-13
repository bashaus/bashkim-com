"use client";

import { MenuButtonHome } from "../../../../components/MenuButtonHome";
import { Page } from "../../../../components/Page";
import { CookiesDetails } from "../CookiesDetails";

export const CookiesPageLockup = () => (
  <Page backButton={MenuButtonHome}>
    <CookiesDetails />
  </Page>
);
