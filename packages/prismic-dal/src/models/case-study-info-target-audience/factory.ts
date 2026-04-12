import { faker } from "@faker-js/faker";
import { Factory } from "fishery";

import { CaseStudyInfoTargetAudienceModelFragment } from "../../gql/graphql";

export const caseStudyInfoTargetAudienceModelFactory =
  Factory.define<CaseStudyInfoTargetAudienceModelFragment>(() => {
    return {
      __typename: "Case_studyInfo_target_audiences",
      info_target_audience_name: faker.lorem.words(3),
    };
  });
