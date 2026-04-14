import { When } from "@cucumber/cucumber";

import { E2EWorld } from "../../world";

When(
  "I click the menu item labelled {string}",
  async function (this: E2EWorld, label: string) {
    await this.page
      .getByRole("toolbar")
      .getByRole("menuitem", { name: label })
      .click();
  },
);
