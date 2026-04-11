import { faker } from "@faker-js/faker";
import { Factory } from "fishery";

import {
  CollaboratorSliceTypeFragment,
  CollaboratorSliceTypePrimaryFragment,
} from "../../gql/graphql";

export const collaboratorSlicePrimaryFactory =
  Factory.define<CollaboratorSliceTypePrimaryFragment>(() => {
    return {
      __typename: "Case_studyCollaboratorsCollaboratorslicetypePrimary",
      collaborator_slice_type_peer: {
        __typename: "Peer",
        peer_name: faker.person.fullName(),
        peer_website: null,
      },
      collaborator_slice_type_role: faker.person.jobTitle(),
      collaborator_slice_type_company: null,
    };
  });

export const collaboratorSliceFactory =
  Factory.define<CollaboratorSliceTypeFragment>(() => {
    return {
      __typename: "Case_studyCollaboratorsCollaboratorslicetype",
      type: "CollaboratorSliceType",
      primary: collaboratorSlicePrimaryFactory.build(),
    };
  });
