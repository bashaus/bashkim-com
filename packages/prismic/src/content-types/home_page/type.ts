import PrismicContentType from "@bashkim-com/prismic/traits/content-type";

import PageTabPropType from "./tabs/page/type";
import SeoTabPropType from "./tabs/seo/type";

type HomePageContentTypeData = PageTabPropType & SeoTabPropType;

type HomePageContentType = PrismicContentType & {
  data: HomePageContentTypeData;
};

export default HomePageContentType;
