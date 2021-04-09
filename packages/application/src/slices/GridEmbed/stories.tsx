import { GridEmbedSliceFixture } from "@bashkim-com/prismic";

import GridEmbedSlice from ".";

export default {
  title: "Slices/Grid Embed",
};

export const Render = (): JSX.Element => (
  <GridEmbedSlice slice={GridEmbedSliceFixture} />
);
