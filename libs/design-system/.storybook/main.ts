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
    "../src/components/**/*.stories.tsx",
    "../src/formatters/**/*.stories.tsx",
    "../src/layout/**/*.stories.tsx",
    "../src/partials/**/*.stories.tsx",
    "../src/slices/**/*.stories.tsx",
  ],

  addons: [
    ...(rootMain.addons || []),
    "@storybook/addon-essentials",
    "@nrwl/react/plugins/storybook",
  ],

  webpackFinal: async (config, options) => {
    const packageWebpackConfig = {};

    if (rootMain.webpackFinal) {
      const rootWebpackConfig = await rootMain.webpackFinal(config, options);

      config = merge(rootWebpackConfig, packageWebpackConfig);
    }

    return config;
  },
};

export default config;
