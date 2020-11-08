import DocumentLinkPrismicType from "%types/document-link";
import SliceType from "%types/slice";

interface CollaboratorSliceType extends SliceType {
  items: Array<any>;
  primary: {
    collaborator_slice_type_peer: DocumentLinkPrismicType<{
      peer_name?: string;
    }>;
    collaborator_slice_type_company?: string;
    collaborator_slice_type_role?: string;
  };
}

export default CollaboratorSliceType;
