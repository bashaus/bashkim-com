import { graphql } from "../../gql";

export const CollaboratorSliceTypePrimary = graphql(`
  fragment CollaboratorSliceTypePrimary on Case_studyCollaboratorsCollaboratorslicetypePrimary {
    collaborator_slice_type_peer {
      ... on Peer {
        ...PeerModel
      }
    }
    collaborator_slice_type_role
    collaborator_slice_type_company
  }
`);

export const CollaboratorSliceType = graphql(`
  fragment CollaboratorSliceType on Case_studyCollaboratorsCollaboratorslicetype {
    primary {
      ...CollaboratorSliceTypePrimary
    }
  }
`);
