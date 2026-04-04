import { Factory } from "fishery";

import { CollaboratorSliceTypeFragment } from "../../gql/graphql";
import { collaboratorSlicePrimaryFactory } from "./collaborator-slice-primary-factory";

export const collaboratorSliceFactory =
  Factory.define<CollaboratorSliceTypeFragment>(() => {
    return {
      type: "CollaboratorSliceType",
      label: null,
      primary: collaboratorSlicePrimaryFactory.build(),
    };
  });
