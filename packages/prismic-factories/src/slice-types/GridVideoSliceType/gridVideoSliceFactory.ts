import type { GridVideoSliceTypeFragment } from "@bashkim-com/prismic-dal";
import { Factory } from "fishery";

import gridVideoSliceFieldFactory from "./gridVideoSliceFieldFactory";

const gridVideoSliceFactory = Factory.define<GridVideoSliceTypeFragment>(() => {
  return {
    type: "GridVideoSliceType",
    label: null,
    fields: gridVideoSliceFieldFactory.buildList(4),
  };
});

export default gridVideoSliceFactory;
