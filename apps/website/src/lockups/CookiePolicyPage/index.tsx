"use client";

import { MenuButtonHome } from "../../components/MenuButtonHome/MenuButtonHome";
import { Page } from "../../components/Page/Page";
import { CookiesDetails } from "../CookiesPage/components/CookiesDetails/CookiesDetails";

const CookiesPageView = () => (
  <Page backButton={MenuButtonHome}>
    <CookiesDetails />
  </Page>
);

export default CookiesPageView;
