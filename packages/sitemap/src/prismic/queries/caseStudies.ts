import { gql } from "@apollo/client";

export const CaseStudiesQuery = gql`
  query CaseStudies {
    caseStudies: allCase_studys(
      sortBy: meta_lastPublicationDate_DESC
      first: 100
    ) {
      edges {
        node {
          _meta {
            uid
            lastPublicationDate
          }
          sitemap_changefreq
          sitemap_priority
        }
      }
    }
  }
`;
