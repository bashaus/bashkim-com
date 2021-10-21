import type { PrismicContentType } from "../../traits/content-type";
import type { PeerContentTypeMainTab } from "./tabs/main/type";

export type PeerContentType = PrismicContentType & PeerContentTypeMainTab;
