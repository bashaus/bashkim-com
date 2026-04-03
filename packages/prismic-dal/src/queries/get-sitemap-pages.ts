import { graphql } from "../gql";

export const GetSitemapPages = graphql(`
  query GetSitemapPages {
    homePage: allHome_pages(first: 1) {
      edges {
        node {
          ...SitemapHomePageModel
        }
      }
    }

    portfolioPage: allPortfolio_pages(first: 1) {
      edges {
        node {
          ...SitemapPortfolioPageModel
        }
      }
    }
  }
`);
