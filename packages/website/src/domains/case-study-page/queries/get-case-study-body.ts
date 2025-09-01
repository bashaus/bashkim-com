import {
  GetCaseStudyBodyDocument,
  GetCaseStudyBodyQuery,
} from "@bashkim-com/prismic-dal";

import apolloClient from "@/libraries/prismic/client";

export const getCaseStudyBody = async (caseStudySlug: string) => {
  return apolloClient.query<GetCaseStudyBodyQuery>({
    query: GetCaseStudyBodyDocument,
    variables: {
      caseStudySlug,
    },
  });
};
