import type { StorybookConfig } from "@storybook/core-common";

export const rootMain: StorybookConfig = {
  core: {
    builder: "webpack5",
    disableTelemetry: true,
  },
  stories: [],
  addons: ["@storybook/addon-essentials", "@storybook/addon-a11y"],
  webpackFinal: async (config) => {
    return config;
  },
};
