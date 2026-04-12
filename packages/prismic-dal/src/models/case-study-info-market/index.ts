import { graphql } from "../../gql";

export const CaseStudyInfoMarketModel = graphql(`
  fragment CaseStudyInfoMarketModel on Case_studyInfo_markets {
    __typename
    info_market
  }
`);
