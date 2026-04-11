import { Factory } from "fishery";

import { SitemapPortfolioPageModelFragment } from "../../gql/graphql";
import { prismicMetaFactory } from "../../prismic/meta/factory";

export const sitemapPortfolioPageModelFactory =
  Factory.define<SitemapPortfolioPageModelFragment>(() => {
    return {
      __typename: "Portfolio_page",
      _meta: prismicMetaFactory.build({
        type: "portfolio_page",
        uid: "portfolio-page",
      }),
      sitemap_changefreq: "monthly",
      sitemap_priority: "0.5",
    };
  });
