import type { FullTextSliceTypeFragment } from "@bashkim-com/prismic-dal";
import { Factory } from "fishery";

import fullTextSlicePrimaryFactory from "./fullTextSlicePrimaryFactory";

const fullTextSliceFactory = Factory.define<FullTextSliceTypeFragment>(() => {
  return {
    type: "FullTextSliceType",
    label: null,
    primary: fullTextSlicePrimaryFactory.build(),
  };
});

export default fullTextSliceFactory;
