const { config: publicRuntimeConfig } = require("@bashkim-com/config");
const path = require("path");
const webpack = require("webpack");
const { merge } = require("webpack-merge");

module.exports = {
  publicRuntimeConfig,
  trailingSlash: true,
  swcMinify: true,
  webpack: (nextConfig) => {
    return merge(nextConfig, {
      resolve: {
        alias: {
          "%styleguide": path.resolve(__dirname, "styleguide"),
        },
        fallback: {
          fs: false,
        },
      },
      plugins: [
        new webpack.ProvidePlugin({
          $: "jquery",
          jQuery: "jquery",
        }),
      ],
      module: {
        rules: [
          // Inline SVG support
          {
            test: /\.svg$/,
            use: [
              {
                loader: "@svgr/webpack",
                options: {
                  runtimeConfig: true,
                },
              },
            ],
          },
        ],
      },
    });
  },
};
