const path = require("path");

module.exports = ({ config }) => {
  (config.resolve.alias = {
    ...config.resolve.alias,
    "%contexts": path.resolve(__dirname, "..", "contexts"),
    "%styleguide": path.resolve(__dirname, "..", "styleguide"),
  }),
    config.module.rules.push({
      test: /\.scss$/,
      loaders: [
        require.resolve("style-loader"),
        {
          loader: require.resolve("css-loader"),
          options: {
            importLoaders: 1,
            modules: {
              localIdentName: "[name]__[local]___[hash:base64:5]",
            },
          },
        },
        require.resolve("sass-loader"),
      ],
    });

  config.module.rules.push({
    test: /\.css$/,
    loaders: [require.resolve("style-loader"), require.resolve("css-loader")],
  });

  config.module.rules.push({
    test: /\.svg$/,
    use: ["@svgr/webpack"],
  });

  return config;
};
