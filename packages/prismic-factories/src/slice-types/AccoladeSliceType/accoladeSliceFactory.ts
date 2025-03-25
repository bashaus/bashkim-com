import type { AccoladeSliceTypeFragment } from "@bashkim-com/prismic-dal";
import { Factory } from "fishery";

import accoladeSliceFieldFactory from "./accoladeSliceFieldFactory";
import accoladeSlicePrimaryFactory from "./accoladeSlicePrimaryFactory";

const accoladeSliceFactory = Factory.define<AccoladeSliceTypeFragment>(() => {
  return {
    type: "AccoladeSliceType",
    label: null,
    primary: accoladeSlicePrimaryFactory.build(),
    fields: [
      accoladeSliceFieldFactory.build({
        accolade_slice_type_award_place: "gold",
      }),
      accoladeSliceFieldFactory.build({
        accolade_slice_type_award_place: "silver",
      }),
      accoladeSliceFieldFactory.build({
        accolade_slice_type_award_place: "bronze",
      }),
      accoladeSliceFieldFactory.build({
        accolade_slice_type_award_place: "honour",
      }),
      accoladeSliceFieldFactory.build({
        accolade_slice_type_award_place: "shortlist",
      }),
    ],
  };
});

export default accoladeSliceFactory;
