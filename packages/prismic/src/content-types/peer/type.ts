import type { PrismicContentType } from "@bashkim-com/prismic/traits/content-type";

import type { PeerContentTypeMainTab } from "./tabs/main/type";

export type PeerContentType = PrismicContentType & PeerContentTypeMainTab;
