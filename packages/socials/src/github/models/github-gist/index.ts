import { graphql } from "../../gql";

export const GitHubGist = graphql(`
  fragment GitHubGist on Gist {
    name
    description
    url
    stargazerCount
  }
`);
