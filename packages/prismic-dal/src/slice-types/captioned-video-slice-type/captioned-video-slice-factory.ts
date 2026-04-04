import { Factory } from "fishery";

import { CaptionedVideoSliceTypeFragment } from "../../gql/graphql";
import { captionedVideoSlicePrimaryFactory } from "./captioned-video-slice-primary-factory";

export const captionedVideoSliceFactory =
  Factory.define<CaptionedVideoSliceTypeFragment>(() => {
    return {
      type: "CaptionedVideoSliceType",
      label: null,
      primary: captionedVideoSlicePrimaryFactory.build(),
    };
  });
