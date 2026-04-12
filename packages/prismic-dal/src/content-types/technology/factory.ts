import { faker } from "@faker-js/faker";
import { Factory } from "fishery";

import { Technology } from "../../gql/graphql";
import { prismicImageIconFactory } from "../../prismic/image/factory";
import { prismicMetaFactory } from "../../prismic/meta/factory";

export const technologyModelFactory = Factory.define<Technology>(
  ({ associations, sequence }) => {
    return {
      __typename: "Technology",
      _meta: prismicMetaFactory.build({
        type: "technology",
        uid: `technology-${sequence}`,
      }),
      technology_name: faker.lorem.words(2),
      technology_icon:
        associations.technology_icon ?? prismicImageIconFactory.build(),
    };
  },
);
