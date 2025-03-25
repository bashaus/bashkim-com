import type { GridEmbedSliceTypeFragment } from "@bashkim-com/prismic-dal";
import { Factory } from "fishery";

import gridEmbedSliceFieldFactory from "./gridEmbedSliceFieldFactory";

const gridEmbedSliceFactory = Factory.define<GridEmbedSliceTypeFragment>(() => {
  return {
    type: "GridEmbedSliceType",
    label: null,
    fields: gridEmbedSliceFieldFactory.buildList(4),
  };
});

export default gridEmbedSliceFactory;
