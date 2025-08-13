import { GetSitemapCaseStudiesQuery } from "@bashkim-com/prismic-dal";
import { HttpResponse } from "msw";

import { prismicLink } from "../link";

export const getSitemapCaseStudiesHandler =
  prismicLink.query<GetSitemapCaseStudiesQuery>("GetSitemapCaseStudies", () =>
    HttpResponse.json({
      data: {
        caseStudies: {
          edges: [
            {
              node: {
                __typename: "Case_study",
                _meta: {
                  uid: "case-study",
                  lastPublicationDate: new Date().toUTCString(),
                },
                sitemap_changefreq: "monthly",
                sitemap_priority: "0.5",
              },
            },
          ],
        },
      },
    }),
  );
