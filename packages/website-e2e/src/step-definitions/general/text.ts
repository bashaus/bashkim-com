import { Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";

import { E2EWorld } from "../../world";

Then(
  "I should {visibility} the heading {string}",
  async function (this: E2EWorld, isVisible: boolean, text: string) {
    const heading = this.page.getByRole("heading", { name: text });

    if (isVisible) {
      await expect(heading).toBeVisible();
    } else {
      await expect(heading).not.toBeAttached();
    }
  },
);
