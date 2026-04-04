import { graphql } from "../gql";

export const GetPortfolioPage = graphql(`
  query GetPortfolioPage {
    portfolioPage: allPortfolio_pages(first: 1) {
      edges {
        node {
          ...PortfolioPageModel
        }
      }
    }
  }
`);
