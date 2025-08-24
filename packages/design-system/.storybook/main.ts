import type { StorybookConfig } from "@storybook/nextjs";
import { dirname, join } from "path";
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
      module: {
        rules: [
          {
            test: /\.svg$/,
            use: ["@svgr/webpack"],
          },
        ],
      },
      optimization: {
        splitChunks: { chunks: "all" },
        runtimeChunk: true,
      },
    });
  },
};

export default config;
