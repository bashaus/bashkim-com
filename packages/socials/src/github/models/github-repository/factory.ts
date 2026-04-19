import { faker } from "@faker-js/faker";
import { Factory } from "fishery";

import { GitHubRepositoryFragment } from "../../gql/graphql";

export const githubRepositoryFactory = Factory.define<GitHubRepositoryFragment>(
  () => {
    return {
      __typename: "Repository",
      name: faker.lorem.words(3),
      description: faker.lorem.sentence(),
      url: faker.internet.url(),
      stargazerCount: faker.number.int({ min: 0, max: 9999 }),
      forkCount: faker.number.int({ min: 0, max: 9999 }),
    };
  },
);
