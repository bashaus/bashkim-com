const withSass = require('@zeit/next-sass');
const Config = require('./config');

const nextConfig = {
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: '[local]___[hash:base64:5]',
  },

  publicRuntimeConfig: Config.get(),

  /* eslint-disable no-param-reassign */
  webpack: (config, { buildId, dev, isServer, defaultLoaders }) => {
    // Perform customizations to webpack config
    // Important: return the modified config

    config.resolve.alias['%styleguide'] = `${__dirname}/styleguide`;

    return config;
  },

  /*
  webpackDevMiddleware: (config) => {
    // Perform customizations to webpack dev middleware config
    // Important: return the modified config
    return config;
  },
  */
};

module.exports = withSass(nextConfig);
