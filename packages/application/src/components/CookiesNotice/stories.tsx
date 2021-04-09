import React from "react";

import CookiesProvider from "%contexts/Cookies/provider";
import CookiesNotice from ".";

export default {
  title: "Components/CookiesNotice",
};

export const Render = (): JSX.Element => (
  <CookiesProvider>
    <CookiesNotice />
  </CookiesProvider>
);
