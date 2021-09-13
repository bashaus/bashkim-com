import { DeepPartial } from "utility-types";
import type { RichTextBlock } from "prismic-reactjs";

import { CaseStudyContentType } from "@bashkim-com/prismic/content-types/case_study/type";
import { PortfolioCategorySliceType } from "@bashkim-com/prismic/slice-types/PortfolioCategory/type";

export type PortfolioPageContentTypePageTabFeatured = {
  featured_title: Array<RichTextBlock> | null;
  featured_description: Array<RichTextBlock> | null;
  featured_case_study: DeepPartial<CaseStudyContentType> | null;
};

export type PortfolioPageContentTypePageTab = {
  featured: Array<PortfolioPageContentTypePageTabFeatured> | null;
  portfolio_categories: PortfolioCategorySliceType;
};
