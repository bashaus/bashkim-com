import { faker } from "@faker-js/faker";
import { Factory } from "fishery";

import { HomePageModelFragment } from "../../gql/graphql";

export const homePageModelFactory = Factory.define<HomePageModelFragment>(
  () => {
    return {
      __typename: "Home_page",
      meta_title: faker.lorem.words(3),
      meta_description: faker.lorem.sentence(),
    };
  },
);
