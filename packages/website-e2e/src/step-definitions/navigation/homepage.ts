import { Given } from "@cucumber/cucumber";

import { E2EWorld } from "../../world";

Given("I am on the Homepage", async function (this: E2EWorld) {
  await this.page.goto("/");
});
