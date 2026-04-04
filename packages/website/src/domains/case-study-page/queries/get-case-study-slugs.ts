import { GetCaseStudies } from "@bashkim-com/prismic-dal";

import apolloClient from "@/libraries/prismic/client";

export async function getCaseStudySlugs() {
  return await apolloClient.query({
    query: GetCaseStudies,
  });
}
