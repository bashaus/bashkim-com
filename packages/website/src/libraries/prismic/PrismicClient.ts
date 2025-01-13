import { ApolloClient, InMemoryCache } from "@apollo/client";
import { createPrismicLink } from "apollo-link-prismic";

const client = new ApolloClient({
  link: createPrismicLink({
    repositoryName: "bashkim-com",
  }),
  cache: new InMemoryCache(),
});

export default client;
