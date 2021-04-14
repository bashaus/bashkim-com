import type DocumentLinkPrismicType from "@bashkim-com/prismic/types/document-link";
import type SliceType from "@bashkim-com/prismic/types/slice";

type CollaboratorSliceType = SliceType & {
  items: Array<any>;
  primary: {
    collaborator_slice_type_peer: DocumentLinkPrismicType<{
      peer_name: string | null;
    }>;
    collaborator_slice_type_company: string | null;
    collaborator_slice_type_role: string | null;
  };
};

export default CollaboratorSliceType;
