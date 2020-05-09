import getConfig from 'next/config';
import Prismic from 'prismic-javascript';
import { IncomingMessage } from 'http';

const createClientOptions = (
  req?: IncomingMessage,
  prismicAccessToken?: string,
): any => {
  const reqOption = req ? { req } : {};
  const accessTokenOption = prismicAccessToken ? { accessToken: prismicAccessToken } : {};

  return {
    ...reqOption,
    ...accessTokenOption,
  };
};

// Client method to query documents from the Prismic repo
const Client = (req?: IncomingMessage): any => {
  const { publicRuntimeConfig: config } = getConfig();
  const { apiEndpoint, accessToken } = config.prismic;
  return Prismic.client(apiEndpoint, createClientOptions(req, accessToken));
};

export default Client;
