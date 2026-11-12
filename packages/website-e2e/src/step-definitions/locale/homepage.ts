import { Given } from "@cucumber/cucumber";

import { Locale } from "../../helpers/locale";
import { E2EWorld } from "../../world";

Given(
  "the user is browsing in the {locale} locale",
  async function (this: E2EWorld, locale: Locale) {
    await this.page.goto(`/${locale}`);
  },
);
