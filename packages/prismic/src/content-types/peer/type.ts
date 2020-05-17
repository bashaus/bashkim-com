import PrismicContentType from "%traits/content-type";

import PeerContentTypeMainTab from "./tabs/main/type";

type PeerContentTypeData = PeerContentTypeMainTab;

interface PeerContentType extends PrismicContentType {
  data: PeerContentTypeData;
}

export default PeerContentType;
