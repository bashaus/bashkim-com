import { faker } from "@faker-js/faker";
import { Factory } from "fishery";

import { PrismicExternalLinkFragment } from "../../gql/graphql";

export const prismicExternalLinkFactory =
  Factory.define<PrismicExternalLinkFragment>(() => {
    return {
      __typename: "_ExternalLink",
      _linkType: "Link.web",
      url: faker.internet.url(),
      target: "_blank",
    };
  });
