import { Factory } from "fishery";

import { GridVideoSliceTypeFragment } from "../../gql/graphql";
import { gridVideoSliceFieldFactory } from "./grid-video-slice-field-factory";

export const gridVideoSliceFactory = Factory.define<GridVideoSliceTypeFragment>(
  () => {
    return {
      type: "GridVideoSliceType",
      label: null,
      fields: gridVideoSliceFieldFactory.buildList(4),
    };
  },
);
