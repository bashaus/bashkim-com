import { Given } from "@cucumber/cucumber";

import { mockNextServerAction } from "../../helpers/next";
import { E2EWorld } from "../../world";

Given(
  "Fetching socials returns a server error",
  async function (this: E2EWorld) {
    const { match } = await import("path-to-regexp");
    const matcher = match<{ locale: string }>("/:locale/socials{/*rest}");

    await this.page.route(
      (url) => !!matcher(url.pathname),
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
