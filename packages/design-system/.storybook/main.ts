import type { StorybookConfig } from "@storybook/nextjs";
import { dirname, join } from "path";
import TsconfigPathsPlugin from "tsconfig-paths-webpack-plugin";
import merge from "webpack-merge";

function getAbsolutePath(value: string): string {
  return dirname(require.resolve(join(value, "package.json")));
}

const config: StorybookConfig = {
  stories: ["../src/**/stories.@(ts|tsx)"],
  addons: [getAbsolutePath("@storybook/addon-a11y")],

  framework: {
    name: getAbsolutePath("@storybook/nextjs"),
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
