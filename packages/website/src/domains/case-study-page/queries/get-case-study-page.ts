import {
  GetCaseStudyPageDocument,
  GetCaseStudyPageQuery,
} from "@bashkim-com/prismic-dal";

import apolloClient from "@/libraries/prismic/client";

export const getCaseStudyPage = async (caseStudySlug: string) => {
  return apolloClient.query<GetCaseStudyPageQuery>({
    query: GetCaseStudyPageDocument,
    variables: {
      caseStudySlug,
    },
  });
};
