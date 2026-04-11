import { Factory } from "fishery";

import { SitemapHomePageModelFragment } from "../../gql/graphql";
import { prismicMetaFactory } from "../../prismic/meta/factory";

export const sitemapHomePageModelFactory =
  Factory.define<SitemapHomePageModelFragment>(() => {
    return {
      __typename: "Home_page",
      sitemap_changefreq: "monthly",
      sitemap_priority: "0.5",
      _meta: prismicMetaFactory.build({
        type: "home_page",
        uid: "home-page",
      }),
    };
  });
