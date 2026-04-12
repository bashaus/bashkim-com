import { faker } from "@faker-js/faker";
import { Factory } from "fishery";

import { TechnologyFragment } from "../../gql/graphql";
import { prismicImageIconFactory } from "../../prismic/image/factory";

export const technologyFactory = Factory.define<TechnologyFragment>(
  ({ associations }) => {
    return {
      __typename: "Technology",
      technology_name: faker.lorem.words(2),
      technology_icon:
        associations.technology_icon ?? prismicImageIconFactory.build(),
    };
  },
);
