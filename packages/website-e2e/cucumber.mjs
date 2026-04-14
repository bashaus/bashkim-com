// @ts-check

import "dotenv/config";

import process from "node:process";

/**
 * @type {Partial<import('@cucumber/cucumber').IConfiguration>}
 **/
export default {
  requireModule: ["ts-node/register"],
  require: ["./src/**/*.ts"],
  format: ["html:test-results/cucumber-report.html"],

  /**
   * @type {import('./src/world/parameters').E2EParametersInput}
   **/
  worldParameters: {
    playwright: {
      baseURL: process.env["PLAYWRIGHT_BASE_URL"],
      browser: /** @type any */ (process.env["PLAYWRIGHT_BROWSER"]),
      headless: process.env["PLAYWRIGHT_HEADLESS"],
    },

    vercel: {
      secret: process.env["VERCEL_AUTOMATION_BYPASS_SECRET"],
    },
  },
};
