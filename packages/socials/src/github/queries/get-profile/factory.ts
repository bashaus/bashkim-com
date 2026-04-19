import { faker } from "@faker-js/faker";
import { Factory } from "fishery";

import { GitHubProfileQuery } from "../../gql/graphql";
import { githubRepositoryFactory } from "../../models/github-repository/factory";

export const githubProfileFactory = Factory.define<GitHubProfileQuery>(() => {
  return {
    __typename: "Query",

    viewer: {
      __typename: "User",
      login: faker.internet.username(),
    },

    user: {
      __typename: "User",

      repositories: {
        __typename: "RepositoryConnection",
        totalCount: faker.number.int({ min: 0 }),
      },

      pinnedItems: {
        __typename: "PinnableItemConnection",
        nodes: githubRepositoryFactory.buildList(4),
      },
    },
  };
});
