import { Factory } from "fishery";

import { NewspaperSliceTypeFragment } from "../../gql/graphql";
import { newspaperSliceFieldFactory } from "./newspaper-slice-field-factory";

export const newspaperSliceFactory = Factory.define<NewspaperSliceTypeFragment>(
  () => {
    return {
      type: "NewspaperSliceType",
      label: null,
      fields: newspaperSliceFieldFactory.buildList(10),
    };
  },
);
