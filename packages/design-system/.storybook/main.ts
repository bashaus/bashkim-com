import type { StorybookConfig } from "@storybook/types";
const config: StorybookConfig = {
  addons: ["@storybook/addon-a11y", "@storybook/addon-essentials"],
  core: {
    disableTelemetry: true,
    enableCrashReports: false,
  },
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  stories: [
    "../src/components/**/*.stories.tsx",
    "../src/formatters/**/*.stories.tsx",
    "../src/layout/**/*.stories.tsx",
    "../src/partials/**/*.stories.tsx",
    "../src/slices/**/*.stories.tsx",
  ],
  docs: {
    autodocs: true,
  },
};
export default config;
