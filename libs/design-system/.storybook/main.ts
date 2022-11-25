import type { StorybookConfig } from "@storybook/core-common";
import { merge } from "webpack-merge";

import { rootMain } from "../../../.storybook/main";

const config: StorybookConfig = {
  ...rootMain,

  core: {
    ...rootMain.core,
    builder: "webpack5",
  },

  stories: [
    ...rootMain.stories,
    "../src/components/**/*.stories.tsx",
    "../src/formatters/**/*.stories.tsx",
    "../src/layout/**/*.stories.tsx",
    "../src/partials/**/*.stories.tsx",
    "../src/slices/**/*.stories.tsx",
  ],

  addons: [...(rootMain.addons || []), "@nrwl/react/plugins/storybook"],

  webpackFinal: async (config, options) => {
    if (rootMain.webpackFinal) {
      config = merge(await rootMain.webpackFinal(config, options), {});
    }

    return config;
  },
};

export default config;
