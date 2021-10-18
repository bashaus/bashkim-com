import { ApolloClient, InMemoryCache } from "@apollo/client";
import { PrismicLink } from "apollo-link-prismic";

import { config } from "@bashkim-com/config";

export const PrismicClient = new ApolloClient({
  link: PrismicLink({
    uri: config.prismic.uri,
  }),
  cache: new InMemoryCache(),
});
