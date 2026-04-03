import { graphql } from "../gql";

export const GitHubGitFragment = graphql(`
  fragment GitHubGist on Gist {
    name
    description
    url
    stargazerCount
  }
`);
