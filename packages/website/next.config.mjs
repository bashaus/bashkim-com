//@ts-check

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

  images: {
    unoptimized: true,
  },

  turbopack: {
    rules: {
      "*.svg": {
        loaders: ["@svgr/webpack"],
        as: "*.js",
      },
    },
  },
};

export default nextConfig;
