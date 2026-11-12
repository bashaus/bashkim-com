//@ts-check

import createNextIntlPlugin from "next-intl/plugin";

import { headers } from "./next.headers.mjs";
import { redirects } from "./next.redirects.mjs";
import { rewrites } from "./next.rewrites.mjs";

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  reactStrictMode: true,

  redirects,
  rewrites,
  headers,

  sassOptions: {
    silenceDeprecations: ["if-function"],
  },

  images: {
    unoptimized: true,
  },

  turbopack: {
    rules: {
      "*.svg": {
        loaders: ["@svgr/webpack"],
        as: "*.js",
      },

      "*.yaml": {
        loaders: ["yaml-loader"],
        as: "*.js",
      },
    },
  },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
