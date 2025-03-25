import type { CaptionedVideoSliceTypeFragment } from "@bashkim-com/prismic-dal";
import { Factory } from "fishery";

import captionedVideoSlicePrimaryFactory from "./captionedVideoSlicePrimaryFactory";

const captionedVideoSliceFactory =
  Factory.define<CaptionedVideoSliceTypeFragment>(() => {
    return {
      type: "CaptionedVideoSliceType",
      label: null,
      primary: captionedVideoSlicePrimaryFactory.build(),
    };
  });

export default captionedVideoSliceFactory;
