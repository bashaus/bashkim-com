/* eslint-disable no-param-reassign */

const path = require('path');

module.exports = function webpackShared(config) {
  // Perform customizations to webpack config
  config.resolve.alias['%styleguide'] = path.resolve(__dirname, 'styleguide');

  // Inline SVG support
  config.module.rules.push({
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  });

  return config;
};
