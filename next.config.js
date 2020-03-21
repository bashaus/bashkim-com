/* eslint-disable no-param-reassign */

require('dotenv').config();

const path = require('path');
const Config = require('./config');

const nextConfig = {
  target: 'serverless',
  publicRuntimeConfig: Config.get(),
  webpack: (config) => {
    // Perform customizations to webpack config
    config.resolve.alias['%styleguide'] = path.resolve(__dirname, 'styleguide');

    // Inline SVG support
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};

module.exports = nextConfig;
