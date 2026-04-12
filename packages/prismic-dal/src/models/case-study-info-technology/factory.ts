import { Factory } from "fishery";

import { CaseStudyInfoTechnologyModelFragment } from "../../gql/graphql";
import { technologyModelFactory } from "../technology/factory";

export const caseStudyInfoTechnologyModelFactory =
  Factory.define<CaseStudyInfoTechnologyModelFragment>(({ associations }) => {
    return {
      __typename: "Case_studyInfo_technologies",
      info_technology:
        associations.info_technology ?? technologyModelFactory.build(),
    };
  });
