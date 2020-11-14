import { gql } from "@apollo/client";

export const HomePageQuery = gql`
  query {
    homePage: allHome_pages(first: 1) {
      edges {
        node {
          meta_title
          meta_keywords
          meta_description
          featured_case_studies {
            featured_case_study {
              ... on Case_study {
                _meta {
                  id
                }
                meta_title
                meta_description
                image_header_desktop
                image_header_mobile
              }
            }
          }
        }
      }
    }
  }
`;
