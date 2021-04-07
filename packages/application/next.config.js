const { default: publicRuntimeConfig } = require("@bashkim-com/config");
const path = require("path");
const webpack = require("webpack");

const nextConfig = {
  target: "serverless",
  publicRuntimeConfig,
  trailingSlash: true,
  webpack: (config, { isServer }) => {
    // Perform customizations to webpack config
    config.resolve.alias["%styleguide"] = path.resolve(__dirname, "styleguide");

    // Inline SVG support
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack", "file-loader"],
    });

    // Global for jQuery
    config.plugins.push(
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
      })
    );

    if (!isServer) {
      config.node = {
        fs: "empty",
      };
    }

    return config;
  },
};

module.exports = nextConfig;
