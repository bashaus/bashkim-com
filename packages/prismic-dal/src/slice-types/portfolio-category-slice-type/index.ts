import { graphql } from "../../gql";

export const PortfolioCategorySliceType = graphql(`
  fragment PortfolioCategorySliceType on Portfolio_pagePortfolio_categoriesPortfoliocategoryslicetype {
    primary {
      ...PortfolioCategorySliceTypePrimary
    }
    fields {
      ...PortfolioCategorySliceTypeField
    }
  }
`);

export const PortfolioCategorySliceTypePrimary = graphql(`
  fragment PortfolioCategorySliceTypePrimary on Portfolio_pagePortfolio_categoriesPortfoliocategoryslicetypePrimary {
    portfolio_category_slug
    portfolio_category_title
    portfolio_category_description
  }
`);

export const PortfolioCategorySliceTypeField = graphql(`
  fragment PortfolioCategorySliceTypeField on Portfolio_pagePortfolio_categoriesPortfoliocategoryslicetypeFields {
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
