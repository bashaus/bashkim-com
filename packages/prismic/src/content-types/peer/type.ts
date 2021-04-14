import type PrismicContentType from "@bashkim-com/prismic/traits/content-type";

import type PeerContentTypeMainTab from "./tabs/main/type";

type PeerContentTypeData = PeerContentTypeMainTab;

type PeerContentType = PrismicContentType & {
  data: PeerContentTypeData;
};

export default PeerContentType;
