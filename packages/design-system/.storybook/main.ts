import type { StorybookConfig } from "@storybook/types";

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

  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },

  addons: [
    ...(rootMain.addons || []),
    "@storybook/addon-essentials",
    "@nx/react/plugins/storybook",
  ],
};

export default config;
