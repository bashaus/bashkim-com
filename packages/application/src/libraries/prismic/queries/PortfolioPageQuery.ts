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

          portfolio_categories {
            ... on Portfolio_pagePortfolio_categoriesPortfoliocategoryslicetype {
              primary {
                portfolio_category_slug
                portfolio_category_title
                portfolio_category_description
              }
              fields {
                portfolio_category_case_study {
                  ... on Case_study {
                    _meta {
                      id
                      uid
                    }

                    meta_title
                    meta_description
                    image_icon
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
