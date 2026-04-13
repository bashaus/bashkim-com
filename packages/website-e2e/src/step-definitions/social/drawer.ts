import { Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";

import { E2EWorld } from "../../world";

Then(
  "I should {visibility} the text {string} in the drawer",
  async function (this: E2EWorld, isVisible: boolean, text: string) {
    const label = await this.page.getByRole("dialog").getByText(text);

    if (isVisible) {
      await expect(label).toBeVisible();
    } else {
      await expect(label).not.toBeAttached();
    }
  },
);
