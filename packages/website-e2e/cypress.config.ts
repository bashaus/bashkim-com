import path from "node:path";

import { defineConfig } from "cypress";

const {
  BASHKIM_COM_BASE_HREF: baseUrl = "https://www.bashkim.com",
  VERCEL_AUTOMATION_BYPASS_SECRET,
} = process.env;

export default defineConfig({
  reporter: path.resolve(
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

  allowCypressEnv: false,
  env: {
    vercelSecret: VERCEL_AUTOMATION_BYPASS_SECRET,
  },

  e2e: {
    /**
     * @override process.env.CYPRESS_BASE_URL
     */
    baseUrl,
    async setupNodeEvents(on, config) {
      // eslint-disable-next-line @typescript-eslint/no-require-imports
      require("cypress-mochawesome-reporter/plugin")(on);

      return config;
    },
  },
});
