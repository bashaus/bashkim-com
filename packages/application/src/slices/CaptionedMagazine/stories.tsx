import React from "react";
import { CaptionedMagazineSliceFixture } from "@bashkim-com/prismic";

import CaptionedMagazineSlice from ".";

export default {
  title: "Slices/Captioned Magazine",
};

export const Render = (): JSX.Element => (
  <CaptionedMagazineSlice slice={CaptionedMagazineSliceFixture} />
);
