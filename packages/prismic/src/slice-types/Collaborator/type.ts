import DocumentLinkPrismicType from "@bashkim-com/prismic/types/document-link";
import SliceType from "@bashkim-com/prismic/types/slice";

type CollaboratorSliceType = SliceType & {
  items: Array<any>;
  primary: {
    collaborator_slice_type_peer: DocumentLinkPrismicType<{
      peer_name?: string;
    }>;
    collaborator_slice_type_company?: string;
    collaborator_slice_type_role?: string;
  };
};

export default CollaboratorSliceType;
