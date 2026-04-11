import { faker } from "@faker-js/faker";
import { DeepPartial, Factory } from "fishery";
import { Required } from "utility-types";

import { Meta } from "../../gql/graphql";
import { prismicDateTimeFactory } from "../date-time/factory";

export const prismicMetaFactory = Factory.define<
  Meta,
  never,
  Meta,
  Required<DeepPartial<Meta>, "type">
>(({ params }) => {
  return {
    __typename: "Meta",
    id: faker.string.alphanumeric(16),
    lang: "en",
    alternateLanguages: [],
    uid: faker.lorem.slug(),
    tags: [],
    type: params.type,
    firstPublicationDate: prismicDateTimeFactory.build(),
    lastPublicationDate: prismicDateTimeFactory.build(),
  };
});
