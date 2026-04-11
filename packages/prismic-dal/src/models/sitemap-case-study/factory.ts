import { Factory } from "fishery";

import { SitemapCaseStudyModelFragment } from "../../gql/graphql";
import { prismicMetaFactory } from "../../prismic/meta/factory";

export const sitemapCaseStudyModelFactory =
  Factory.define<SitemapCaseStudyModelFragment>(() => {
    return {
      __typename: "Case_study",
      _meta: prismicMetaFactory.build({
        type: "case_study",
        uid: "case-study",
      }),
      sitemap_changefreq: "monthly",
      sitemap_priority: "0.5",
    };
  });
