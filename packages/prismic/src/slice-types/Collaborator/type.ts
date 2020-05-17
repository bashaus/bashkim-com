import DocumentLinkPrismicType from "%types/document-link";
import SliceType from "%types/slice";

interface CollaboratorSliceType extends SliceType {
  items: Array<any>;
  primary: {
    CollaboratorSliceType_Peer: DocumentLinkPrismicType<{
      peer_name?: string;
    }>;
    CollaboratorSliceType_Company?: string;
    CollaboratorSliceType_Role?: string;
  };
}

export default CollaboratorSliceType;
