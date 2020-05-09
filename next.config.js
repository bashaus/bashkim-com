const webpack = require("webpack");
const path = require("path");

const { default: config } = require("%config/index");

const nextConfig = {
  target: "serverless",
  publicRuntimeConfig: config,
  webpack: (config) => {
    // Perform customizations to webpack config
    config.resolve.alias["%styleguide"] = path.resolve(__dirname, "styleguide");

    // Inline SVG support
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    // Global for jQuery
    config.plugins.push(
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
      }),
    );

    return config;
  },
};

module.exports = nextConfig;
