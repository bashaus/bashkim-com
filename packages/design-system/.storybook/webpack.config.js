const path = require("path");
const { merge } = require("webpack-merge");

module.exports = ({ config }) => {
  const fileLoaderRule = config.module.rules.find((rule) =>
    rule.test.test(".svg")
  );
  fileLoaderRule.exclude = path.resolve("..");

  return merge(config, {
    resolve: {
      extensions: [".ts", ".tsx"],
    },
    module: {
      rules: [
        {
          test: /\.svg$/,
          use: [{ loader: "@svgr/webpack" }],
        },
        {
          test: /\.tsx?$/,
          use: [{ loader: "ts-loader" }],
        },
      ],
    },
  });
};
