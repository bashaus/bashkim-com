import { graphql } from "../../gql";

export const PortfolioPageModel = graphql(`
  fragment PortfolioPageModel on Portfolio_page {
    meta_title
    meta_description

    featured {
      ...PortfolioPageFeaturedModel
    }

    portfolio_categories {
      ...PortfolioCategorySliceType
    }
  }
`);
