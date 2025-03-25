import type { CaptionedMagazineSliceTypeFragment } from "@bashkim-com/prismic-dal";
import { Factory } from "fishery";

import captionedMagazineSliceFieldFactory from "./captionedMagazineSliceFieldFactory";
import captionedMagazineSlicePrimaryFactory from "./captionedMagazineSlicePrimaryFactory";

const captionedMagazineSliceFactory =
  Factory.define<CaptionedMagazineSliceTypeFragment>(() => {
    return {
      type: "CaptionedMagazineSliceType",
      label: null,
      primary: captionedMagazineSlicePrimaryFactory.build(),
      fields: captionedMagazineSliceFieldFactory.buildList(4),
    };
  });

export default captionedMagazineSliceFactory;
