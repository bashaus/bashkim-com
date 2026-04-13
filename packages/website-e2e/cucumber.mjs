// @ts-check

import "dotenv/config";

import process from "node:process";

/**
 * @type {Partial<import('@cucumber/cucumber').IConfiguration>}
 **/
export default {
  requireModule: ["ts-node/register"],
  require: ["./src/**/*.ts"],
  format: ["html:test-reports/cucumber-report.html"],

  /**
   * @type {import('./src/world/parameters').E2EParametersInput}
   **/
  worldParameters: {
    website: {
      baseUrl: process.env["BASE_URL"],
    },

    vercel: {
      secret: process.env["VERCEL_SECRET"],
    },
  },
};
