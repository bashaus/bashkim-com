import { After, AfterAll, Before, BeforeAll } from "@cucumber/cucumber";
import { Browser, chromium, firefox, LaunchOptions } from "@playwright/test";
import { z } from "zod";

import { E2EWorld } from "../world";

let browser: Browser;

const playwrightSchema = z.object({
  useBrowser: z.enum(["firefox", "chromium"]).default("chromium"),
  headless: z.stringbool().default(true),
});

BeforeAll(async () => {
  /**
   * `E2EWorld` is not available during `BeforeAll`.
   * Check the environment variable directly instead of via world parameters.
   */

  const { useBrowser, headless } = await playwrightSchema.parseAsync({
    useBrowser: process.env["PLAYWRIGHT_BROWSER"],
    headless: process.env["PLAYWRIGHT_HEADLESS"],
  });

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
  const status = scenario.result?.status ?? "unknown";
  const screenshot = await this.page.screenshot({ type: "png" });

  this.attach(screenshot, {
    fileName: `${status}.png`,
    mediaType: "image/png",
  });

  await this.context.close();
});

AfterAll(async () => {
  await browser.close();
});
