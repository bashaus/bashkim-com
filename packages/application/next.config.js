const { config: publicRuntimeConfig } = require("@bashkim-com/config");
const webpack = require("webpack");
const { merge } = require("webpack-merge");

module.exports = {
  typescript: {
    tsconfigPath: "./tsconfig.build.json",
  },
  compiler: {
    styledComponents: true,
  },
  publicRuntimeConfig,
  trailingSlash: true,
  swcMinify: true,
  webpack: (nextConfig) => {
    return merge(nextConfig, {
      resolve: {
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
