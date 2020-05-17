import React from "react";
import { CaptionedVideoSliceFixture } from "@bashkim-com/prismic";

import CaptionedVideoSlice from ".";

export default {
  title: "Slices/Captioned Video",
};

export const Render = (): JSX.Element => (
  <CaptionedVideoSlice slice={CaptionedVideoSliceFixture} />
);
