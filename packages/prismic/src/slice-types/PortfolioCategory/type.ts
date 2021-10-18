import type { DeepPartial } from "utility-types";
import type { RichTextBlock } from "prismic-reactjs";

import type { PrismicSliceType } from "../../types/Slice";
import type { CaseStudyContentType } from "../../content-types";

export type PortfolioCategorySliceType = PrismicSliceType & {
  primary: {
    portfolio_category_slug: string | null;
    portfolio_category_title: Array<RichTextBlock> | null;
    portfolio_category_description: Array<RichTextBlock> | null;
  } | null;
  fields: Array<{
    portfolio_category_case_study: DeepPartial<CaseStudyContentType> | null;
  }> | null;
};
