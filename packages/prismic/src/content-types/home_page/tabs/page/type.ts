import type { DeepPartial } from "utility-types";

import type { CaseStudyContentType } from "../../../../content-types";

export type HomePageContentTypePageTab = {
  featured_case_studies: Array<{
    featured_case_study: DeepPartial<CaseStudyContentType> | null;
  }>;
};
