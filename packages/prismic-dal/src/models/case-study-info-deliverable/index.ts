import { graphql } from "../../gql";

export const CaseStudyInfoDeliverableModel = graphql(`
  fragment CaseStudyInfoDeliverableModel on Case_studyInfo_deliverables {
    __typename
    info_deliverable_name
    info_deliverable_link {
      ...ExternalLink
    }
  }
`);
