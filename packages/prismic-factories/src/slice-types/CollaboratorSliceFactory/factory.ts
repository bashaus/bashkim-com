import type { CollaboratorSliceTypeFragment } from "@bashkim-com/prismic-dal";
import { Factory } from "fishery";

const collaboratorSliceFactory = Factory.define<CollaboratorSliceTypeFragment>(
  () => {
    return {
      type: "CollaboratorSliceType",
      label: null,
      primary: {
        collaborator_slice_type_peer: {
          peer_name: "Emma de la Fosse",
          peer_website: null,
        },
        collaborator_slice_type_role: "Executive Creative Director",
        collaborator_slice_type_company: null,
      },
    };
  },
);

export default collaboratorSliceFactory;
