import { HttpResponse } from "msw";

import { GetCaseStudyBodyQuery } from "../../gql/graphql";
import { prismicLink } from "../../mock/link";
import { caseStudyBodyModelFactory } from "../../models/case-study-body/factory";

export const getCaseStudyBodyHandler = prismicLink.query<GetCaseStudyBodyQuery>(
  "GetCaseStudyBody",
  () =>
    HttpResponse.json({
      data: {
        caseStudyBody: {
          edges: [
            {
              node: caseStudyBodyModelFactory.build(),
            },
          ],
        },
      },
    }),
);
