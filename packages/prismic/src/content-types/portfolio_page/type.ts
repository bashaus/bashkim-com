import PrismicContentType from "%traits/content-type";

import PageTabPropType from "./tabs/page/type";
import SeoTabPropType from "./tabs/seo/type";

interface PortfolioPageContentTypeData
  extends PageTabPropType,
    SeoTabPropType {}

interface PortfolioPageContentType extends PrismicContentType {
  data: PortfolioPageContentTypeData;
}

export default PortfolioPageContentType;
