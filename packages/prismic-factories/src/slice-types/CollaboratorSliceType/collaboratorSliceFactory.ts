import type { CollaboratorSliceTypeFragment } from "@bashkim-com/prismic-dal";
import { Factory } from "fishery";

import collaboratorSlicePrimaryFactory from "./collaboratorSlicePrimaryFactory";

const collaboratorSliceFactory = Factory.define<CollaboratorSliceTypeFragment>(
  () => {
    return {
      type: "CollaboratorSliceType",
      label: null,
      primary: collaboratorSlicePrimaryFactory.build(),
    };
  },
);

export default collaboratorSliceFactory;
