import { graphql } from "../../gql";

export const SitemapPortfolioPageModel = graphql(`
  fragment SitemapPortfolioPageModel on Portfolio_page {
    __typename
    _meta {
      uid
      lastPublicationDate
    }

    sitemap_changefreq
    sitemap_priority
  }
`);
