import { graphql } from "../../gql";

export const CaseStudyInfoTechnologyModel = graphql(`
  fragment CaseStudyInfoTechnologyModel on Case_studyInfo_technologies {
    __typename
    info_technology {
      ...Technology
    }
  }
`);
