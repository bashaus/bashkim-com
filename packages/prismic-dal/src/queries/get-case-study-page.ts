import { graphql } from "../gql";

export const GetCaseStudyPage = graphql(`
  query GetCaseStudyPage($caseStudySlug: String) {
    caseStudyPage: allCase_studys(uid: $caseStudySlug) {
      edges {
        node {
          ...CaseStudyPageModel
        }
      }
    }
  }
`);
