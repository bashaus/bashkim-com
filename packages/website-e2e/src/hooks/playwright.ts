import { After, AfterAll, Before, BeforeAll } from "@cucumber/cucumber";
import { Browser, chromium } from "@playwright/test";

import { E2EWorld } from "../world";

let browser: Browser;

BeforeAll(async () => {
  browser = await chromium.launch({
    headless: false,
  });
});

Before(async function (this: E2EWorld) {
  this.context = await browser.newContext();
  this.page = await this.context.newPage();
});

After(async function (this: E2EWorld) {
  this.context.close();
});

AfterAll(async () => {
  browser.close();
});
