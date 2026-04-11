import { graphql } from "../../gql";

export const GetCaseStudyBody = graphql(`
  query GetCaseStudyBody($caseStudySlug: String) {
    caseStudyBody: allCase_studys(uid: $caseStudySlug) {
      edges {
        node {
          ...CaseStudyBodyModel
        }
      }
    }
  }
`);
