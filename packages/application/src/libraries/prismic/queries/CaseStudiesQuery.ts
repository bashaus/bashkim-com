import { gql } from "@apollo/client";

export const CaseStudiesQuery = gql`
  query {
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
`;
