import {
  ApolloClient,
  ApolloLink,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client";
import { createErrorsLink } from "@apollo-link-debug/handle-errors";
import { createRequestLink } from "@apollo-link-debug/handle-request";

const token = process.env["APP_SOCIALS_GITHUB_TOKEN"];

const client = new ApolloClient({
  link: ApolloLink.from([
    createRequestLink(),
    createErrorsLink(),
    createHttpLink({
      uri: "https://api.github.com/graphql",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }),
  ]),
  cache: new InMemoryCache(),
});

export default client;
