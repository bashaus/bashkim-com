import { HttpResponse } from "msw";

import { GetSitemapCaseStudiesQuery } from "../../gql/graphql";
import { prismicLink } from "../../mock/link";
import { prismicMetaFactory } from "../../prismic/meta/factory";

export const getSitemapCaseStudiesHandler =
  prismicLink.query<GetSitemapCaseStudiesQuery>("GetSitemapCaseStudies", () =>
    HttpResponse.json({
      data: {
        caseStudies: {
          edges: [
            {
              node: {
                __typename: "Case_study",
                _meta: prismicMetaFactory.build({
                  type: "case_study",
                  uid: "case-study",
                }),
                sitemap_changefreq: "monthly",
                sitemap_priority: "0.5",
              },
            },
          ],
        },
      },
    }),
  );
