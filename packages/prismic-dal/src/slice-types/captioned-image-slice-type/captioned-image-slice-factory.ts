import { Factory } from "fishery";

import { CaptionedImageSliceTypeFragment } from "../../gql/graphql";
import { captionedImageSlicePrimaryFactory } from "./captioned-image-slice-primary-factory";

export const captionedImageSliceFactory =
  Factory.define<CaptionedImageSliceTypeFragment>(() => {
    return {
      type: "CaptionedImageSliceType",
      label: null,
      primary: captionedImageSlicePrimaryFactory.build(),
    };
  });

export default captionedImageSliceFactory;
