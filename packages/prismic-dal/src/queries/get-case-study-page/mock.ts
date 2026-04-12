import { HttpResponse } from "msw";

import { GetCaseStudyPageQuery } from "../../gql/graphql";
import { prismicLink } from "../../mock/link";
import { caseStudyPageModelFactory } from "../../models/case-study-page/factory";

export const getCaseStudyPageHandler = prismicLink.query<GetCaseStudyPageQuery>(
  "GetCaseStudyPage",
  () =>
    HttpResponse.json({
      data: {
        caseStudyPage: {
          edges: [
            {
              node: caseStudyPageModelFactory.build(),
            },
          ],
        },
      },
    }),
);
