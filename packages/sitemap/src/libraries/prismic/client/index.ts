import { ApolloClient, InMemoryCache } from "@apollo/client";
import { config } from "@bashkim-com/config";
import { PrismicLink } from "apollo-link-prismic";

export const PrismicClient = new ApolloClient({
  link: PrismicLink({
    uri: config.prismic.uri,
  }),
  cache: new InMemoryCache(),
});
