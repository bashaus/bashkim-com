import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";

const token = process.env["APP_SOCIALS_SERVER_GITHUB_TOKEN"];

export const apolloGitHubClient = new ApolloClient({
  link: createHttpLink({
    uri: "https://api.github.com/graphql",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }),
  cache: new InMemoryCache(),
});
