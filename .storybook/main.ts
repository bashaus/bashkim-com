import type { StorybookConfig } from "@storybook/core-common";
import { merge } from "webpack-merge";

export const rootMain: Partial<StorybookConfig> = {
  core: {
    builder: "webpack5",
    disableTelemetry: true,
  },

  addons: ["storybook-addon-swc", "@storybook/addon-a11y"],
  webpackFinal: async (config) => {
    return merge(config, {});
  },
};
