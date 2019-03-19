const withCss = require('@zeit/next-css');
const withSass = require('@zeit/next-sass');
const path = require('path');
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
    config.resolve.alias['%styleguide'] = path.resolve(__dirname, 'styleguide');

    // Disable CSS Modules for .css files
    config.module.rules.forEach(rule => {
      if (String(rule.test) === String(/\.css$/)) {
        rule.use.forEach(u => {
          if (u.options) {
            u.options.modules = false;
          }
        });
      }
    });

    // Important: return the modified config
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

module.exports = withCss(withSass(nextConfig));
