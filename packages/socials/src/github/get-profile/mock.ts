import { HttpResponse } from "msw";

import { GitHubProfileQuery } from "../dal/gql/graphql";
import { githubLink } from "../dal/mock";

export const getGitHubProfileHandler = githubLink.query<GitHubProfileQuery>(
  "GitHubProfile",
  () =>
    HttpResponse.json({
      data: {
        viewer: {
          __typename: "User",
          login: "bashaus",
        },

        user: {
          __typename: "User",

          repositories: {
            __typename: "RepositoryConnection",
            totalCount: 10,
          },

          pinnedItems: {
            __typename: "PinnableItemConnection",
            nodes: [
              {
                __typename: "Repository",
                name: "bashkim-com",
                description:
                  "Source code showcasing my online portfolio of works.",
                url: "https://github.com/bashaus/bashkim-com",
                forkCount: 0,
                stargazerCount: 1,
              },
            ],
          },
        },
      },
    }),
);
