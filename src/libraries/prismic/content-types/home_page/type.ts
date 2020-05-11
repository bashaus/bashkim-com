import PrismicContentType from "%prismic/traits/content-type";

import PageTabPropType from "./tabs/page/type";
import SeoTabPropType from "./tabs/seo/type";

interface HomePageContentTypeData extends PageTabPropType, SeoTabPropType {}

interface HomePageContentType extends PrismicContentType {
  data: HomePageContentTypeData;
}

export default HomePageContentType;
