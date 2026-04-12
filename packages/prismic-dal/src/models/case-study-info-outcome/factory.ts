import { faker } from "@faker-js/faker";
import { Factory } from "fishery";

import { CaseStudyInfoOutcomeModelFragment } from "../../gql/graphql";

export const caseStudyInfoOutcomeModelFactory =
  Factory.define<CaseStudyInfoOutcomeModelFragment>(() => {
    return {
      __typename: "Case_studyInfo_outcomes",
      info_outcome: faker.lorem.words(5),
    };
  });
