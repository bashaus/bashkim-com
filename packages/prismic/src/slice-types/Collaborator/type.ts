import type { PeerContentType } from "../../content-types";
import type { PrismicSliceType } from "../../types/Slice";

export type CollaboratorSliceType = PrismicSliceType & {
  primary: {
    collaborator_slice_type_peer: PeerContentType | null;
    collaborator_slice_type_company: string | null;
    collaborator_slice_type_role: string | null;
  };
};
