import type { RichTextBlock } from "prismic-reactjs";
import { DeepPartial } from "utility-types";

import { CaseStudyContentType } from "../../../../content-types/case_study/type";
import { PortfolioCategorySliceType } from "../../../../slice-types/PortfolioCategory/type";

export type PortfolioPageContentTypePageTabFeatured = {
  featured_title: Array<RichTextBlock> | null;
  featured_description: Array<RichTextBlock> | null;
  featured_case_study: DeepPartial<CaseStudyContentType> | null;
};

export type PortfolioPageContentTypePageTab = {
  featured: Array<PortfolioPageContentTypePageTabFeatured> | null;
  portfolio_categories: Array<PortfolioCategorySliceType> | null;
};
