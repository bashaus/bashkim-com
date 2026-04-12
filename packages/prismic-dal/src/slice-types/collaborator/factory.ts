import { faker } from "@faker-js/faker";
import { Factory } from "fishery";

import { peerModelFactory } from "../../content-types/peer/factory";
import {
  CollaboratorSliceTypeFragment,
  CollaboratorSliceTypePrimaryFragment,
} from "../../gql/graphql";

export const collaboratorSlicePrimaryFactory =
  Factory.define<CollaboratorSliceTypePrimaryFragment>(({ associations }) => {
    return {
      __typename: "Case_studyCollaboratorsCollaboratorslicetypePrimary",
      collaborator_slice_type_peer:
        associations.collaborator_slice_type_peer ?? peerModelFactory.build(),
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
