import { graphql } from "../../gql";

export const CaseStudyInfoTargetAudienceModel = graphql(`
  fragment CaseStudyInfoTargetAudienceModel on Case_studyInfo_target_audiences {
    __typename
    info_target_audience_name
  }
`);
