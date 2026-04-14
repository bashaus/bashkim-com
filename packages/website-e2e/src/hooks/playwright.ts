import { After, AfterAll, Before, BeforeAll } from "@cucumber/cucumber";
import { Browser, chromium } from "@playwright/test";
import { z } from "zod";

import { E2EWorld } from "../world";

let browser: Browser;

BeforeAll(async () => {
  /**
   * `E2EWorld` is not available during `BeforeAll`.
   * Check the environment variable directly instead of via world parameters.
   */

  const headless = await z
    .stringbool()
    .default(true)
    .parseAsync(process.env["PLAYWRIGHT_HEADLESS"]);

  browser = await chromium.launch({
    headless,
  });
});

Before(async function (this: E2EWorld) {
  const { baseURL } = this.parameters.playwright;

  this.context = await browser.newContext({ baseURL });
  this.page = await this.context.newPage();
});

After(async function (this: E2EWorld) {
  this.context.close();
});

AfterAll(async () => {
  browser.close();
});
