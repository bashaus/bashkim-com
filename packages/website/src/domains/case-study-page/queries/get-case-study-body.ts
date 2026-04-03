import { GetCaseStudyBody } from "@bashkim-com/prismic-dal";

import apolloClient from "@/libraries/prismic/client";

export const getCaseStudyBody = async (caseStudySlug: string) => {
  return await apolloClient.query({
    query: GetCaseStudyBody,
    variables: {
      caseStudySlug,
    },
  });
};
