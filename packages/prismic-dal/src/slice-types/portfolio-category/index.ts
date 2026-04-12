import { graphql } from "../../gql";

export const PortfolioCategorySliceTypeField = graphql(`
  fragment PortfolioCategorySliceTypeField on Portfolio_pagePortfolio_categoriesPortfoliocategoryslicetypeFields {
    __typename
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
`);

export const PortfolioCategorySliceTypePrimary = graphql(`
  fragment PortfolioCategorySliceTypePrimary on Portfolio_pagePortfolio_categoriesPortfoliocategoryslicetypePrimary {
    __typename
    portfolio_category_slug
    portfolio_category_title
    portfolio_category_description
  }
`);

export const PortfolioCategorySliceType = graphql(`
  fragment PortfolioCategorySliceType on Portfolio_pagePortfolio_categoriesPortfoliocategoryslicetype {
    __typename
    primary {
      ...PortfolioCategorySliceTypePrimary
    }
    fields {
      ...PortfolioCategorySliceTypeField
    }
  }
`);
