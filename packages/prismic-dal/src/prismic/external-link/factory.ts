import { faker } from "@faker-js/faker";
import { Factory } from "fishery";

import { ExternalLinkFragment } from "../../gql/graphql";

export const prismicExternalLinkFactory = Factory.define<ExternalLinkFragment>(
  () => {
    return {
      __typename: "_ExternalLink",
      url: faker.internet.url(),
      target: null,
    };
  },
);
