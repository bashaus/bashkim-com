import { graphql } from "../gql";

export const GitHubRepositoryFragment = graphql(`
  fragment GitHubRepository on Repository {
    name
    description
    url
    forkCount
    stargazerCount
  }
`);
