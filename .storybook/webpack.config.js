const path = require('path');

module.exports = {
  resolve: {
    alias: {
      '%store': path.resolve(__dirname, '..', 'store'),
      '%contexts': path.resolve(__dirname, '..', 'contexts'),
      '%styleguide': path.resolve(__dirname, '..', 'styleguide')
    }
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        loaders: [
          require.resolve('style-loader'),
          {
            loader: require.resolve('css-loader'),
            options: {
              importLoaders: 1,
              modules: true,
              localIdentName: '[name]__[local]___[hash:base64:5]',
            },
          },
          require.resolve('sass-loader')
        ],
      },
      {
        test: /\.css$/,
        loaders: [
          require.resolve('style-loader'),
          require.resolve('css-loader'),
        ],
      },
    ],
  },
};
