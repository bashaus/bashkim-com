import { Factory } from "fishery";

import { technologyModelFactory } from "../../content-types/technology/factory";
import { CaseStudyInfoTechnologyModelFragment } from "../../gql/graphql";

export const caseStudyInfoTechnologyModelFactory =
  Factory.define<CaseStudyInfoTechnologyModelFragment>(({ associations }) => {
    return {
      __typename: "Case_studyInfo_technologies",
      info_technology:
        associations.info_technology ?? technologyModelFactory.build(),
    };
  });
