import { URL } from "node:url";

import { Given } from "@cucumber/cucumber";

import { E2EWorld } from "../../world";

Given("I am on the Homepage", async function (this: E2EWorld) {
  const url = new URL("/", this.parameters.website.baseUrl);
  await this.page.goto(url.toString());
});
