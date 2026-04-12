import { faker } from "@faker-js/faker";
import { Factory } from "fishery";

import { CaseStudyInfoMarketModelFragment } from "../../gql/graphql";

export const caseStudyInfoMarketModelFactory =
  Factory.define<CaseStudyInfoMarketModelFragment>(() => {
    return {
      __typename: "Case_studyInfo_markets",
      info_market: faker.lorem.words(3),
    };
  });
