import { ApolloClient, InMemoryCache } from "@apollo/client";
import { config } from "@bashkim-com/config";
import { createPrismicLink } from "apollo-link-prismic";
import fetch from "node-fetch";

export const PrismicClient = new ApolloClient({
  link: createPrismicLink({
    repositoryName: config.prismic.repositoryName,
    fetch,
  }),
  cache: new InMemoryCache(),
});
