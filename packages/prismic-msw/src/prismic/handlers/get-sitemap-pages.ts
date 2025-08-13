import { GetSitemapPagesQuery } from "@bashkim-com/prismic-dal";
import { HttpResponse } from "msw";

import { prismicLink } from "../link";

export const getSitemapPagesHandler = prismicLink.query<GetSitemapPagesQuery>(
  "GetSitemapPages",
  () =>
    HttpResponse.json({
      data: {
        homePage: {
          edges: [
            {
              node: {
                __typename: "Home_page",
                sitemap_changefreq: "monthly",
                sitemap_priority: "0.5",
                _meta: {
                  __typename: "Meta",
                  uid: "123",
                  lastPublicationDate: new Date().toDateString(),
                },
              },
            },
          ],
        },

        portfolioPage: {
          edges: [
            {
              node: {
                __typename: "Portfolio_page",
                sitemap_changefreq: "monthly",
                sitemap_priority: "0.5",
                _meta: {
                  __typename: "Meta",
                  uid: "234",
                  lastPublicationDate: new Date().toDateString(),
                },
              },
            },
          ],
        },

        // caseStudies: {
        //   edges: [
        //     {
        //       node: {
        //         __typename: "Case_study",
        //         _meta: {
        //           uid: "case-study",
        //         },
        //       },
        //     },
        //   ],
        // },
      },
    }),
);
