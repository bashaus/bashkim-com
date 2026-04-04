import { Factory } from "fishery";

import { GridEmbedSliceTypeFragment } from "../../gql/graphql";
import { gridEmbedSliceFieldFactory } from "./grid-embed-slice-field-factory";

export const gridEmbedSliceFactory = Factory.define<GridEmbedSliceTypeFragment>(
  () => {
    return {
      type: "GridEmbedSliceType",
      label: null,
      fields: gridEmbedSliceFieldFactory.buildList(4),
    };
  },
);
