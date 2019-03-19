const Prismic = require('prismic-javascript');
const getConfig = require('next/config').default;

const { publicRuntimeConfig } = getConfig();

module.exports = Prismic.api(publicRuntimeConfig.prismic.apiEndpoint);
