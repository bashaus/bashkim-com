import {
  GetCaseStudiesDocument,
  GetCaseStudiesQuery,
} from "@bashkim-com/prismic-dal";

import apolloClient from "@/libraries/prismic/client";

export const getCaseStudySlugs = async () => {
  return apolloClient.query<GetCaseStudiesQuery>({
    query: GetCaseStudiesDocument,
  });
};
