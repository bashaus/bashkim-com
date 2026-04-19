import { graphql } from "../../gql";

export const GitHubProfileQuery = graphql(`
  query GitHubProfile {
    viewer {
      login
    }

    user(login: "bashaus") {
      repositories {
        totalCount
      }

      pinnedItems(first: 6) {
        nodes {
          ... on Gist {
            ...GitHubGist
          }

          ... on Repository {
            ...GitHubRepository
          }
        }
      }
    }
  }
`);
