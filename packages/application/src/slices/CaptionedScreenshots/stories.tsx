import React from "react";
import { CaptionedScreenshotsSliceFixture } from "@bashkim-com/prismic";

import CaptionedScreenshotsSlice from ".";

export default {
  title: "Slices/Captioned Screenshots",
};

export const Render = (): JSX.Element => (
  <CaptionedScreenshotsSlice slice={CaptionedScreenshotsSliceFixture} />
);
