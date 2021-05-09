const path = require("path");
const webpack = require("webpack");

module.exports = ({ config }) => {
  config.resolve.alias = {
    ...config.resolve.alias,
    "%contexts": path.resolve(__dirname, "..", "src", "contexts"),
    "%machines": path.resolve(__dirname, "..", "src", "machines"),
    "%styleguide": path.resolve(__dirname, "..", "src", "styleguide"),
  };

  /* svg */

  const fileLoaderRule = config.module.rules.find(rule => rule.test.test('.svg'));
  fileLoaderRule.exclude = path.resolve('..')

  config.module.rules.push({
    test: /\.svg$/,
    use: [
      { loader: "@svgr/webpack" }
    ],
  });

  /* css and scss */

  config.module.rules.push({
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
  });

  config.module.rules.push({
    test: /\.css$/,
    use: [
      { loader: "style-loader" },
      { loader: "css-loader" },
    ],
  });

  /* typescript */

  config.resolve.extensions.push(".ts", ".tsx");
  config.module.rules.push({
    test: /\.tsx?$/,
    use: [
      { loader: "babel-loader" }
    ],
  });

  /* jquery */
  config.plugins.push(
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
    })
  );

  return config;
};
