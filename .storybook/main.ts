import type { StorybookConfig } from "@storybook/types";

export const rootMain: StorybookConfig = {
  stories: [],

  core: {
    builder: "webpack5",
    disableTelemetry: true,
    enableCrashReports: false,
  },

  addons: ["storybook-addon-swc", "@storybook/addon-a11y"],
};
