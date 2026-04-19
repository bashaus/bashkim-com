import { faker } from "@faker-js/faker";
import { Factory } from "fishery";

import { GitHubGistFragment } from "../../gql/graphql";

export const githubGistFactory = Factory.define<GitHubGistFragment>(() => {
  return {
    __typename: "Gist",
    name: faker.lorem.words(3),
    description: faker.lorem.sentence(),
    url: faker.internet.url(),
    stargazerCount: faker.number.int({ min: 0, max: 9999 }),
  };
});
