import { ApolloClient, InMemoryCache } from "@apollo/client";
import { config } from "@bashkim-com/config";
import { createPrismicLink } from "apollo-link-prismic";

export const PrismicClient = new ApolloClient({
  link: createPrismicLink({
    uri: config.prismic.uri,
  }),
  cache: new InMemoryCache(),
});
