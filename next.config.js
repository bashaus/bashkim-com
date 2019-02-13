const withSass = require('@zeit/next-sass');
const config = require('./config');

const nextConfig = {
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: '[local]___[hash:base64:5]',
  },

  publicRuntimeConfig: config.get(),

  /*
  webpack: (config, { buildId, dev, isServer, defaultLoaders }) => {
    // Perform customizations to webpack config
    // Important: return the modified config
    return config;
  },

  webpackDevMiddleware: (config) => {
    // Perform customizations to webpack dev middleware config
    // Important: return the modified config
    return config;
  },
  */
};

module.exports = withSass(nextConfig);
