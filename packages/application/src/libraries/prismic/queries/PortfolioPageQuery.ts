import { gql } from "@apollo/client";

export const PortfolioPageQuery = gql`
  query {
    portfolioPage: allPortfolio_pages {
      edges {
        node {
          meta_title
          meta_description
          meta_keywords
          featured {
            featured_title
            featured_description
            featured_case_study {
              ... on Case_study {
                _meta {
                  id
                  uid
                }

                image_icon
                image_poster
                meta_title
                meta_description
              }
            }
          }
        }
      }
    }

    caseStudies: allCase_studys(sortBy: info_launch_date_DESC, first: 100) {
      edges {
        node {
          _meta {
            uid
          }
          meta_title
          meta_description
          image_icon
        }
      }
    }
  }
`;
