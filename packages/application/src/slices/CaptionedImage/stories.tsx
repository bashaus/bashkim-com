import { CaptionedImageSliceFixture } from "@bashkim-com/prismic";

import { CaptionedImageSlice } from ".";

export default {
  title: "Slices/Captioned Image",
};

export const Render = (): JSX.Element => (
  <CaptionedImageSlice slice={CaptionedImageSliceFixture} />
);
