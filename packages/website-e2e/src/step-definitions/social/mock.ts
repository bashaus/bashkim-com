import { Given } from "@cucumber/cucumber";

import { mockNextServerAction } from "../../helpers/next";
import { E2EWorld } from "../../world";

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
