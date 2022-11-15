import CollaboratorSliceType from "../../../../slice-types/Collaborator/schema.json";

export default {
  collaborators: {
    type: "Slices",
    fieldset: "Collaborators",
    config: {
      choices: {
        CollaboratorSliceType,
      },
    },
  },
};
