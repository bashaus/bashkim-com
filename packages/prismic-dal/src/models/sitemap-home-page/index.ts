import { graphql } from "../../gql";

export const SitemapHomePageModel = graphql(`
  fragment SitemapHomePageModel on Home_page {
    __typename
    _meta {
      uid
      lastPublicationDate
    }

    sitemap_changefreq
    sitemap_priority
  }
`);
