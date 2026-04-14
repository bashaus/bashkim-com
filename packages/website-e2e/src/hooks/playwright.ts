import { After, AfterAll, Before, BeforeAll } from "@cucumber/cucumber";
import { TestStepResultStatus } from "@cucumber/messages";
import { Browser, chromium, firefox, LaunchOptions } from "@playwright/test";
import { z } from "zod";

import { E2EWorld } from "../world";

let browser: Browser;

BeforeAll(async () => {
  /**
   * `E2EWorld` is not available during `BeforeAll`.
   * Check the environment variable directly instead of via world parameters.
   */

  const useBrowser = await z
    .enum(["firefox", "chromium"])
    .default("chromium")
    .parseAsync(process.env["PLAYWRIGHT_BROWSER"]);

  const headless = await z
    .stringbool()
    .default(true)
    .parseAsync(process.env["PLAYWRIGHT_HEADLESS"]);

  const launchOptions: LaunchOptions = {
    headless,
  };

  switch (useBrowser) {
    case "chromium": {
      browser = await chromium.launch(launchOptions);
      return;
    }

    case "firefox": {
      browser = await firefox.launch(launchOptions);
      return;
    }
  }
});

Before(async function (this: E2EWorld) {
  const { baseURL } = this.parameters.playwright;

  this.context = await browser.newContext({ baseURL });
  this.page = await this.context.newPage();
});

After(async function (this: E2EWorld, scenario) {
  if (scenario.result?.status === TestStepResultStatus.FAILED) {
    const screenshot = await this.page.screenshot({ type: "png" });
    this.attach(screenshot, { fileName: "failed.png", mediaType: "image/png" });
  }

  await this.context.close();
});

AfterAll(async () => {
  await browser.close();
});
