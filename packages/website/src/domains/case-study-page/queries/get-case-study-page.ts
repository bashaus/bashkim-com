import { GetCaseStudyPage } from "@bashkim-com/prismic-dal";

import apolloClient from "@/libraries/prismic/client";

export async function getCaseStudyPage(caseStudySlug: string) {
  return await apolloClient.query({
    query: GetCaseStudyPage,
    variables: {
      caseStudySlug,
    },
  });
}
