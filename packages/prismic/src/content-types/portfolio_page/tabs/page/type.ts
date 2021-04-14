import { DeepPartial } from "utility-types";

import { CaseStudyContentType } from "@bashkim-com/prismic/content-types/case_study/type";
import {
  PrismicRichTextElement,
  PrismicRichTextType,
} from "@bashkim-com/prismic/types/RichText";

export type PortfolioPageContentTypePageTabFeatured = {
  featured_title: PrismicRichTextType<PrismicRichTextElement.HEADING3> | null;
  featured_description: PrismicRichTextType<
    PrismicRichTextElement.PARAGRAPH
  > | null;
  featured_case_study: DeepPartial<CaseStudyContentType> | null;
};

export type PortfolioPageContentTypePageTab = {
  featured: Array<PortfolioPageContentTypePageTabFeatured> | null;
};
