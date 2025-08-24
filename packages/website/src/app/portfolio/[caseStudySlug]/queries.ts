import {
  GetCaseStudiesDocument,
  GetCaseStudiesQuery,
  GetCaseStudyBodyDocument,
  GetCaseStudyBodyQuery,
  GetCaseStudyPageDocument,
  GetCaseStudyPageQuery,
} from "@bashkim-com/prismic-dal";

import { apolloClient } from "@/libraries/prismic/client";

export const getPrismicSlugs = async () => {
  return apolloClient.query<GetCaseStudiesQuery>({
    query: GetCaseStudiesDocument,
  });
};

export const getPrismicPage = async (caseStudySlug: string) => {
  return apolloClient.query<GetCaseStudyPageQuery>({
    query: GetCaseStudyPageDocument,
    variables: {
      caseStudySlug,
    },
  });
};

export const getPrismicBody = async (caseStudySlug: string) => {
  return apolloClient.query<GetCaseStudyBodyQuery>({
    query: GetCaseStudyBodyDocument,
    variables: {
      caseStudySlug,
    },
  });
};
