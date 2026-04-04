import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import * as prismic from "@prismicio/client";
import { enableAutoPreviews } from "@prismicio/next";

const { PRISMICIO_ACCESS_TOKEN: accessToken } = process.env;
const repositoryName = "bashkim-com";

export const prismicClient = prismic.createClient(repositoryName, {
  accessToken,
  routes: [
    {
      type: "case_study",
      path: "/portfolio/:uid",
    },
  ],
});

enableAutoPreviews({ client: prismicClient });

export const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  link: ApolloLink.from([
    new HttpLink({
      uri: prismic.getGraphQLEndpoint(repositoryName),
      useGETForQueries: true,
      fetch: (input: RequestInfo | URL, init?: RequestInit) =>
        prismicClient.graphQLFetch(input as RequestInfo, init),
      fetchOptions: {
        next: {
          tags: ["prismic"],
        },
      },
    }),
  ]),
});

export default apolloClient;
