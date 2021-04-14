import type { PrismicContentType } from "@bashkim-com/prismic/traits/content-type";

import type { PortfolioPageContentTypePageTab } from "./tabs/page/type";
import type { PortfolioPageContentTypeSeoTab } from "./tabs/seo/type";

export type PortfolioPageContentType = PrismicContentType &
  PortfolioPageContentTypePageTab &
  PortfolioPageContentTypeSeoTab;
