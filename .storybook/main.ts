import type { StorybookConfig } from "@storybook/core-common";
import { merge } from "webpack-merge";

export const rootMain: StorybookConfig = {
  core: {
    builder: "webpack5",
    disableTelemetry: true,
  },
  stories: [],
  addons: [
    "storybook-addon-swc",
    "@storybook/addon-essentials",
    "@storybook/addon-a11y",
  ],
  webpackFinal: async (config) => {
    return merge(config, {});
  },
};
