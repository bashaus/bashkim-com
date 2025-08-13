import { GetCaseStudiesQuery } from "@bashkim-com/prismic-dal";
import { HttpResponse } from "msw";

import { prismicLink } from "../link";

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
                _meta: {
                  uid: "case-study",
                },
              },
            },
          ],
        },
      },
    }),
);
