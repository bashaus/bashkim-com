import { faker } from "@faker-js/faker";
import { Factory } from "fishery";

import { _ExternalLink } from "../../gql/graphql";

export const prismicExternalLinkFactory = Factory.define<_ExternalLink>(() => {
  return {
    __typename: "_ExternalLink",
    url: faker.internet.url(),
    target: null,
  };
});
