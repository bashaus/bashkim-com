const path = require("path");
const { merge } = require("webpack-merge");

module.exports = ({ config }) => {
  const fileLoaderRule = config.module.rules.find((rule) =>
    rule.test.test(".svg")
  );
  fileLoaderRule.exclude = path.resolve("..");

  return merge(config, {
    resolve: {
      alias: {
        "%styleguide": path.resolve(__dirname, "..", "src", "styleguide"),
      },
      extensions: [".ts", ".tsx"],
    },
    module: {
      rules: [
        {
          test: /\.svg$/,
          issuer: /\.tsx?$/,
          use: [{ loader: "@svgr/webpack" }],
        },
        {
          test: /\.svg$/,
          issuer: /\.scss$/,
          type: "asset/resource",
        },
        {
          test: /\.scss$/,
          use: [
            { loader: "style-loader" },
            {
              loader: "css-loader",
              options: {
                importLoaders: 1,
                modules: {
                  localIdentName: "[name]__[local]___[hash:base64:5]",
                },
              },
            },
            { loader: "sass-loader" },
          ],
        },
        {
          test: /\.css$/,
          use: [{ loader: "style-loader" }, { loader: "css-loader" }],
        },
        {
          test: /\.tsx?$/,
          use: [{ loader: "ts-loader" }],
        },
      ],
    },
  });
};
