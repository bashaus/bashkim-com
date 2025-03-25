import { ExhibitionSliceTypeFragment } from "@bashkim-com/prismic-dal";
import { Factory } from "fishery";

import exhibitionSlicePrimaryFactory from "./exhibitionSlicePrimaryFactory";

const exhibitionSliceFactory = Factory.define<ExhibitionSliceTypeFragment>(
  () => {
    return {
      type: "ExhibitionSliceType",
      label: null,
      primary: exhibitionSlicePrimaryFactory.build(),
    };
  },
);

export default exhibitionSliceFactory;
