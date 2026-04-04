import { Factory } from "fishery";

import { ExhibitionSliceTypeFragment } from "../../gql/graphql";
import { exhibitionSlicePrimaryFactory } from "./exhibition-slice-primary-factory";

export const exhibitionSliceFactory =
  Factory.define<ExhibitionSliceTypeFragment>(() => {
    return {
      type: "ExhibitionSliceType",
      label: null,
      primary: exhibitionSlicePrimaryFactory.build(),
    };
  });
