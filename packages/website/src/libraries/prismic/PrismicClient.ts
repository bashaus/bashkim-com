import { ApolloClient, InMemoryCache } from "@apollo/client";
import { createPrismicLink } from "apollo-link-prismic";

export const prismicClient = new ApolloClient({
  link: createPrismicLink({
    repositoryName: "bashkim-com",
  }),
  cache: new InMemoryCache(),
});
