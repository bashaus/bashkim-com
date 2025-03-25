import type { NewspaperSliceTypeFragment } from "@bashkim-com/prismic-dal";
import { Factory } from "fishery";

import newspaperSliceFieldFactory from "./newspaperSliceFieldFactory";

const newspaperSliceFactory = Factory.define<NewspaperSliceTypeFragment>(() => {
  return {
    type: "NewspaperSliceType",
    label: null,
    fields: newspaperSliceFieldFactory.buildList(10),
  };
});

export default newspaperSliceFactory;
