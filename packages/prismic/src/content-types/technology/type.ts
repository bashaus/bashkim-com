import type { PrismicContentType } from "@bashkim-com/prismic/traits/content-type";

import type { TechnologyContentTypeTechnologyTab } from "./tabs/technology/type";

export type TechnologyContentType = PrismicContentType &
  TechnologyContentTypeTechnologyTab;
