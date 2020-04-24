const Prismic = require('prismic-javascript');
const getConfig = require('next/config').default;

const { publicRuntimeConfig } = getConfig();

const createClientOptions = (req = null, prismicAccessToken = null) => {
  const reqOption = req ? { req } : {};
  const accessTokenOption = prismicAccessToken ? { accessToken: prismicAccessToken } : {};

  return {
    ...reqOption,
    ...accessTokenOption,
  };
};

// Client method to query documents from the Prismic repo
const Client = (req = null) => {
  const { apiEndpoint, accessToken } = publicRuntimeConfig.prismic;
  return Prismic.client(apiEndpoint, createClientOptions(req, accessToken));
};

module.exports = Client;
