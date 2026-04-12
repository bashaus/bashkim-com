import { graphql } from "../../gql";

export const CaseStudyInfoOutcomeModel = graphql(`
  fragment CaseStudyInfoOutcomeModel on Case_studyInfo_outcomes {
    __typename
    info_outcome
  }
`);
