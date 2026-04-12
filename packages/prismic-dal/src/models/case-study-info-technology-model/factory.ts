import { Factory } from "fishery";

import { technologyFactory } from "../../content-types/technology/factory";
import { CaseStudyInfoTechnologyModelFragment } from "../../gql/graphql";

export const caseStudyInfoTechnologyModelFactory =
  Factory.define<CaseStudyInfoTechnologyModelFragment>(({ associations }) => {
    return {
      __typename: "Case_studyInfo_technologies",
      info_technology:
        associations.info_technology ?? technologyFactory.build(),
    };
  });
