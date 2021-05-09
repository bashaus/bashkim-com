import { SubtitleSliceFixture } from "@bashkim-com/prismic";

import { SubtitleSlice } from ".";

export default {
  title: "Slices/Subtitle",
};

export const Render = (): JSX.Element => (
  <SubtitleSlice slice={SubtitleSliceFixture} />
);
