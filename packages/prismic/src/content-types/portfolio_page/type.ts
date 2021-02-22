import PrismicContentType from "@bashkim-com/prismic/traits/content-type";

import PageTabPropType from "./tabs/page/type";
import SeoTabPropType from "./tabs/seo/type";

type PortfolioPageContentTypeData = PageTabPropType & SeoTabPropType;

type PortfolioPageContentType = PrismicContentType & {
  data: PortfolioPageContentTypeData;
};

export default PortfolioPageContentType;
