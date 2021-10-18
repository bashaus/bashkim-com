import type { PrismicContentType } from "../../traits/content-type";

import type { TechnologyContentTypeTechnologyTab } from "./tabs/technology/type";

export type TechnologyContentType = PrismicContentType &
  TechnologyContentTypeTechnologyTab;
