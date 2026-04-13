import { Given, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";

import { mockNextServerAction } from "../../helpers/next";
import { E2EWorld } from "../../world";

Then(
  "I should {visibility} a connection error",
  async function (this: E2EWorld, isVisible: boolean) {
    const errorAlert = this.page.getByRole("dialog").getByRole("alert");

    if (isVisible) {
      await expect(errorAlert).toBeAttached();
    } else {
      await expect(errorAlert).not.toBeVisible();
    }
  },
);

Given(
  "Fetching socials returns a server error",
  async function (this: E2EWorld) {
    await this.page.route(
      (url) => url.pathname.startsWith("/socials/"),
      mockNextServerAction(async (route) => {
        await route.fulfill({
          status: 500,
          contentType: "application/json",
          body: JSON.stringify({ error: "Mocked Server Action Failure" }),
        });
      }),
    );
  },
);
