import type PrismicContentType from "@bashkim-com/prismic/traits/content-type";

import type PageTabPropType from "./tabs/page/type";
import type SeoTabPropType from "./tabs/seo/type";

type PortfolioPageContentTypeData = PageTabPropType & SeoTabPropType;

type PortfolioPageContentType = PrismicContentType & {
  data: PortfolioPageContentTypeData;
};

export default PortfolioPageContentType;
