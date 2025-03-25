import type { SubtitleSliceTypeFragment } from "@bashkim-com/prismic-dal";
import { Factory } from "fishery";

import subtitleSlicePrimaryFactory from "./subtitleSlicePrimaryFactory";

const subtitleSliceFactory = Factory.define<SubtitleSliceTypeFragment>(() => {
  return {
    type: "SubtitleSliceType",
    label: null,
    primary: subtitleSlicePrimaryFactory.build(),
  };
});

export default subtitleSliceFactory;
