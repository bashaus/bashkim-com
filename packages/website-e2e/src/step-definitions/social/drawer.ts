import { Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";

import { E2EWorld } from "../../world";

Then(
  "I should {visibility} the text {string} in the drawer",
  async function (this: E2EWorld, ensureVisible: boolean, text: string) {
    const label = await this.page.getByRole("dialog").getByText(text);

    if (ensureVisible) {
      await expect(label).toBeVisible();
    } else {
      await expect(label).not.toBeAttached();
    }
  },
);
