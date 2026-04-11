import { graphql } from "../../gql";

export const GetCaseStudies = graphql(`
  query GetCaseStudies {
    caseStudies: allCase_studys(first: 100) {
      edges {
        node {
          _meta {
            uid
          }
        }
      }
    }
  }
`);
