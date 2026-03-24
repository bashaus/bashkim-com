import { createRequire } from "node:module";
import { dirname, join } from "node:path";

import type { StorybookConfig } from "@storybook/nextjs";

const require = createRequire(import.meta.url);

function getAbsolutePath(value: string): string {
  return dirname(require.resolve(join(value, "package.json")));
}

const config: StorybookConfig = {
  stories: ["../src/**/stories.@(ts|tsx)"],
  addons: [getAbsolutePath("@storybook/addon-a11y")],

  framework: {
    name: getAbsolutePath("@storybook/nextjs"),
    options: {
      image: {
        exclude: ["**/*.svg"],
      },
    },
  },

  core: {
    disableTelemetry: true,
  },

  async webpackFinal(config) {
    config.module ??= {};
    config.module.rules ??= [];

    config.module.rules.forEach((rule) => {
      if (
        rule &&
        rule !== "..." &&
        rule.test instanceof RegExp &&
        rule.test.test(".svg")
      ) {
        rule.exclude = /\.svg$/i;
      }
    });

    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            typescript: true,
            ext: "tsx",
          },
        },
      ],
    });

    return config;
  },
};

export default config;
