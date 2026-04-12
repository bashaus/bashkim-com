import { HttpResponse } from "msw";

import { GetCaseStudiesQuery } from "../../gql/graphql";
import { prismicLink } from "../../mock/link";
import { prismicMetaFactory } from "../../prismic/meta/factory";

export const getCaseStudiesHandler = prismicLink.query<GetCaseStudiesQuery>(
  "GetCaseStudies",
  () =>
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
              },
            },
          ],
        },
      },
    }),
);
