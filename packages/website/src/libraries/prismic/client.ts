import {
  ApolloClient,
  ApolloLink,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client";
import * as prismic from "@prismicio/client";

export const repositoryName = "bashkim-com";

export const prismicClient = prismic.createClient(repositoryName, {
  routes: [
    {
      type: "case_study",
      path: "/portfolio/:uid",
    },
  ],
});

export const apolloClient = new ApolloClient({
  link: ApolloLink.from([
    createHttpLink({
      uri: prismic.getGraphQLEndpoint(repositoryName),
      useGETForQueries: true,
      fetch: (input: RequestInfo | URL, init?: RequestInit) =>
        prismicClient.graphQLFetch(input as RequestInfo, init),
    }),
  ]),
  cache: new InMemoryCache(),
});

export default apolloClient;
