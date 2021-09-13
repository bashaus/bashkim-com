import type { DeepPartial } from "utility-types";
import type { CaseStudyContentType } from "@bashkim-com/prismic/content-types";

export type HomePageContentTypePageTab = {
  featured_case_studies: Array<{
    featured_case_study: {
      id: string;
      type: string;
      tags: Array<string>;
      slug: string;
      lang: string;
      uid: string;
      data: DeepPartial<CaseStudyContentType>;
      link_type?: string;
      isBroken: boolean;
    };
  }>;
};
