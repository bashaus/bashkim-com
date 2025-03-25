import type { CaptionedImageSliceTypeFragment } from "@bashkim-com/prismic-dal";
import { Factory } from "fishery";

import captionedImageSlicePrimaryFactory from "./captionedImageSlicePrimaryFactory";

const captionedImageSliceFactory =
  Factory.define<CaptionedImageSliceTypeFragment>(() => {
    return {
      type: "CaptionedImageSliceType",
      label: null,
      primary: captionedImageSlicePrimaryFactory.build(),
    };
  });

export default captionedImageSliceFactory;
