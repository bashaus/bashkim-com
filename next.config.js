/* eslint-disable no-unused-vars */
require('dotenv').config();

const Config = require('./config');
const webpackShared = require('./webpack.shared');

const nextConfig = {
  target: 'serverless',
  publicRuntimeConfig: Config.get(),
  webpack: (config) => webpackShared(config),
};

module.exports = nextConfig;
