import {
  CaseStudiesDocument,
  CaseStudiesQuery,
  CaseStudyBodyDocument,
  CaseStudyBodyQuery,
  CaseStudyPageDocument,
  CaseStudyPageQuery,
} from "@bashkim-com/prismic-dal";

import { prismicClient } from "../../../libraries/prismic/PrismicClient";

export const getPrismicSlugs = async () => {
  return prismicClient.query<CaseStudiesQuery>({
    query: CaseStudiesDocument,
  });
};

export const getPrismicPage = async (caseStudySlug: string) => {
  return prismicClient.query<CaseStudyPageQuery>({
    query: CaseStudyPageDocument,
    variables: {
      caseStudySlug,
    },
  });
};

export const getPrismicBody = async (caseStudySlug: string) => {
  return prismicClient.query<CaseStudyBodyQuery>({
    query: CaseStudyBodyDocument,
    variables: {
      caseStudySlug,
    },
  });
};
