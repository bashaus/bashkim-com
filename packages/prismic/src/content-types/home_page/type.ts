import type { PrismicContentType } from "../../traits/content-type";

import type { HomePageContentTypePageTab } from "./tabs/page/type";
import type { HomePageContentTypeSeoTab } from "./tabs/seo/type";

export type HomePageContentType = PrismicContentType &
  HomePageContentTypePageTab &
  HomePageContentTypeSeoTab;
