import { Given, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";

import { mockNextServerAction } from "../../helpers/next";
import { E2EWorld } from "../../world";

Then(
  "I should {visibility} a connection error in the drawer",
  async function (this: E2EWorld, ensureVisible: boolean) {
    const errorAlert = this.page.getByRole("alert");

    if (ensureVisible) {
      await expect(errorAlert).toBeVisible();
    } else {
      await expect(errorAlert).not.toBeAttached();
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
