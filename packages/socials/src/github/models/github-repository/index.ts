import { graphql } from "../../gql";

export const GitHubRepository = graphql(`
  fragment GitHubRepository on Repository {
    name
    description
    url
    forkCount
    stargazerCount
  }
`);
