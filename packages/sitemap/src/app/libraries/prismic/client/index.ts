import { ApolloClient, InMemoryCache } from "@apollo/client";
import { createPrismicLink } from "apollo-link-prismic";
import fetch from "cross-fetch";

export const prismicClient = new ApolloClient({
  link: createPrismicLink({
    repositoryName: "bashkim-com",
    fetch,
  }),
  cache: new InMemoryCache(),
});
