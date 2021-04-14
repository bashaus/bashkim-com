import type PrismicContentType from "@bashkim-com/prismic/traits/content-type";

import type PageTabPropType from "./tabs/page/type";
import type SeoTabPropType from "./tabs/seo/type";

type HomePageContentTypeData = PageTabPropType & SeoTabPropType;

type HomePageContentType = PrismicContentType & {
  data: HomePageContentTypeData;
};

export default HomePageContentType;
