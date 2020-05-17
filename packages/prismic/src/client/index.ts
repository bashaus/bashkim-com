import Prismic from "prismic-javascript";
import { IncomingMessage } from "http";

import config from "@bashkim-com/config";

const createClientOptions = (
  req?: IncomingMessage,
  prismicAccessToken?: string
): any => {
  const reqOption = req ? { req } : {};
  const accessTokenOption = prismicAccessToken
    ? { accessToken: prismicAccessToken }
    : {};

  return {
    ...reqOption,
    ...accessTokenOption,
  };
};

// Client method to query documents from the Prismic repo
const Client = (req?: IncomingMessage): any => {
  const { apiEndpoint, accessToken } = config.prismic;
  return Prismic.client(apiEndpoint, createClientOptions(req, accessToken));
};

export default Client;
