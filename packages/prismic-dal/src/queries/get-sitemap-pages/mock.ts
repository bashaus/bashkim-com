import { HttpResponse } from "msw";

import { GetSitemapPagesQuery } from "../../gql/graphql";
import { prismicLink } from "../../mock/link";
import { sitemapHomePageModelFactory } from "../../models/sitemap-home-page/factory";
import { sitemapPortfolioPageModelFactory } from "../../models/sitemap-portfolio-page/factory";

export const getSitemapPagesHandler = prismicLink.query<GetSitemapPagesQuery>(
  "GetSitemapPages",
  () =>
    HttpResponse.json({
      data: {
        homePage: {
          edges: [
            {
              node: sitemapHomePageModelFactory.build(),
            },
          ],
        },

        portfolioPage: {
          edges: [
            {
              node: sitemapPortfolioPageModelFactory.build(),
            },
          ],
        },
      },
    }),
);
