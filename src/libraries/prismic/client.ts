import Prismic from 'prismic-javascript';
import getConfig from 'next/config';
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
  const { publicRuntimeConfig } = getConfig();
  const { apiEndpoint, accessToken } = publicRuntimeConfig.prismic;
  return Prismic.client(apiEndpoint, createClientOptions(req, accessToken));
};

export default Client;
