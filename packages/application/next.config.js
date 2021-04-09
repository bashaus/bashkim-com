const { default: publicRuntimeConfig } = require("@bashkim-com/config");
const path = require("path");
const webpack = require("webpack");

const nextConfig = {
  target: "serverless",
  publicRuntimeConfig,
  trailingSlash: true,
  webpack: (config) => {
    // Perform customizations to webpack config
    config.resolve.alias["%styleguide"] = path.resolve(__dirname, "styleguide");

    // Inline SVG support
    config.module.rules.push({
      test: /\.svg$/,
      use: [{ loader: "@svgr/webpack" }],
    });

    // Global for jQuery
    config.plugins.push(
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
      })
    );

    return config;
  },
};

module.exports = nextConfig;
