import type { StorybookConfig } from "@storybook/nextjs";
import TsconfigPathsPlugin from "tsconfig-paths-webpack-plugin";
import merge from "webpack-merge";

const config: StorybookConfig = {
  stories: ["../src/**/stories.@(ts|tsx)"],
  addons: ["@storybook/addon-essentials", "@storybook/addon-a11y"],

  framework: {
    name: "@storybook/nextjs",
    options: {},
  },

  core: {
    disableTelemetry: true,
  },

  async webpackFinal(config) {
    config.module?.rules?.forEach((rule) => {
      if (
        rule &&
        typeof rule === "object" &&
        rule?.test instanceof RegExp &&
        rule.test.test(".svg")
      ) {
        rule.exclude = /\.svg$/;
      }
    });

    return merge(config, {
      resolve: {
        plugins: [
          new TsconfigPathsPlugin({
            extensions: config?.resolve?.extensions,
          }),
        ],
      },

      module: {
        rules: [
          {
            test: /\.svg$/,
            use: ["@svgr/webpack"],
          },
        ],
      },
    });
  },
};

export default config;
