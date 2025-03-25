import type { CollaboratorSliceTypePrimaryFragment } from "@bashkim-com/prismic-dal";
import { faker } from "@faker-js/faker";
import { Factory } from "fishery";

const collaboratorSlicePrimaryFactory =
  Factory.define<CollaboratorSliceTypePrimaryFragment>(() => {
    return {
      collaborator_slice_type_peer: {
        peer_name: faker.person.fullName(),
        peer_website: null,
      },
      collaborator_slice_type_role: faker.person.jobTitle(),
      collaborator_slice_type_company: null,
    };
  });

export default collaboratorSlicePrimaryFactory;
