import {
  GetCaseStudiesDocument,
  GetCaseStudiesQuery,
  GetCaseStudyBodyDocument,
  GetCaseStudyBodyQuery,
  GetCaseStudyPageDocument,
  GetCaseStudyPageQuery,
} from "@bashkim-com/prismic-dal";

import prismicClient from "@/libraries/prismic/PrismicClient";

export const getPrismicSlugs = async () => {
  return prismicClient.query<GetCaseStudiesQuery>({
    query: GetCaseStudiesDocument,
  });
};

export const getPrismicPage = async (caseStudySlug: string) => {
  return prismicClient.query<GetCaseStudyPageQuery>({
    query: GetCaseStudyPageDocument,
    variables: {
      caseStudySlug,
    },
  });
};

export const getPrismicBody = async (caseStudySlug: string) => {
  return prismicClient.query<GetCaseStudyBodyQuery>({
    query: GetCaseStudyBodyDocument,
    variables: {
      caseStudySlug,
    },
  });
};
