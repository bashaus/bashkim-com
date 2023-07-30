import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import fetch from "cross-fetch";

const token = process.env["APP_SOCIALS_SERVER_GITHUB_TOKEN"];

export const apolloGitHubClient = new ApolloClient({
  link: createHttpLink({
    uri: "https://api.github.com/graphql",
    fetch,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }),
  cache: new InMemoryCache(),
});
