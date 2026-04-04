import { Factory } from "fishery";

import { FullTextSliceTypeFragment } from "../../gql/graphql";
import { fullTextSlicePrimaryFactory } from "./full-text-slice-primary-factory";

export const fullTextSliceFactory = Factory.define<FullTextSliceTypeFragment>(
  () => {
    return {
      type: "FullTextSliceType",
      label: null,
      primary: fullTextSlicePrimaryFactory.build(),
    };
  },
);
