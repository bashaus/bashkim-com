import type PrismicContentType from "@bashkim-com/prismic/traits/content-type";

import type TechnologyContentTypeTechnologyTab from "./tabs/technology/type";

type TechnologyContentTypeData = TechnologyContentTypeTechnologyTab;

type TechnologyContentType = PrismicContentType & {
  data: TechnologyContentTypeData;
};

export default TechnologyContentType;
