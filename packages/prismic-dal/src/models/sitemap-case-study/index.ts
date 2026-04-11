import { graphql } from "../../gql";

export const SitemapCaseStudyModel = graphql(`
  fragment SitemapCaseStudyModel on Case_study {
    _meta {
      uid
      lastPublicationDate
    }
    sitemap_changefreq
    sitemap_priority
  }
`);
