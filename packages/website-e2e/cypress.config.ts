import { resolve } from "node:path";

import { defineConfig } from "cypress";

export default defineConfig({
  reporter: resolve(
    __dirname,
    "..",
    "..",
    "node_modules",
    "cypress-mochawesome-reporter",
  ),
  reporterOptions: {
    reportDir: "cypress/reports",
    overwrite: true,
    html: true,
    json: true,
  },

  e2e: {
    /**
     * @override process.env.CYPRESS_BASE_URL
     */
    baseUrl: "https://www.bashkim.com",
    async setupNodeEvents(on, config) {
      // eslint-disable-next-line @typescript-eslint/no-require-imports
      require("cypress-mochawesome-reporter/plugin")(on);

      return config;
    },
  },
});
