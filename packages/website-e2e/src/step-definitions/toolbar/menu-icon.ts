import { When } from "@cucumber/cucumber";

import { E2EWorld } from "../../world";

When(
  "the user clicks the menu icon labelled {string}",
  async function (this: E2EWorld, label: string) {
    await this.page.getByRole("button", { name: label }).click();
  },
);
