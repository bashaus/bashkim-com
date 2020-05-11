import PrismicContentType from "%prismic/traits/content-type";

import TechnologyContentTypeTechnologyTab from "./tabs/technology/type";

type TechnologyContentTypeData = TechnologyContentTypeTechnologyTab;

interface TechnologyContentType extends PrismicContentType {
  data: TechnologyContentTypeData;
}

export default TechnologyContentType;
