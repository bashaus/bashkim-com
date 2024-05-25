import { dirname, join } from "path";
import type { StorybookConfig } from "@storybook/types";

function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, "package.json")));
}

const config: StorybookConfig = {
  addons: [
    getAbsolutePath("@storybook/addon-a11y"),
    getAbsolutePath("@storybook/addon-essentials"),
  ],

  core: {
    disableTelemetry: true,
    enableCrashReports: false,
  },

  framework: {
    name: getAbsolutePath("@storybook/nextjs"),
    options: {},
  },

  stories: [
    "../src/components/**/stories.tsx",
    "../src/formatters/**/stories.tsx",
    "../src/layout/**/stories.tsx",
    "../src/partials/**/stories.tsx",
    "../src/slices/**/stories.tsx",
  ],
};

export default config;
