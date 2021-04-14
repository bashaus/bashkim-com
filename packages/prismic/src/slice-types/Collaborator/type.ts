import type { PeerContentType } from "@bashkim-com/prismic/content-types";
import type { PrismicSliceType } from "@bashkim-com/prismic/types/Slice";

export type CollaboratorSliceType = PrismicSliceType & {
  primary: {
    collaborator_slice_type_peer: PeerContentType | null;
    collaborator_slice_type_company: string | null;
    collaborator_slice_type_role: string | null;
  };
};
