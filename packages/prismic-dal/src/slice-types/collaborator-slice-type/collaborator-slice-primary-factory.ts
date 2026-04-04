import { faker } from "@faker-js/faker";
import { Factory } from "fishery";

import { CollaboratorSliceTypePrimaryFragment } from "../../gql/graphql";

export const collaboratorSlicePrimaryFactory =
  Factory.define<CollaboratorSliceTypePrimaryFragment>(() => {
    return {
      collaborator_slice_type_peer: {
        __typename: "Peer",
        peer_name: faker.person.fullName(),
        peer_website: null,
      },
      collaborator_slice_type_role: faker.person.jobTitle(),
      collaborator_slice_type_company: null,
    };
  });
