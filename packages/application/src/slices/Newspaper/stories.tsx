import { NewspaperSliceFixture } from "@bashkim-com/prismic";

import { NewspaperSlice } from ".";

export default {
  title: "Slices/Grid Video",
};

export const Render = (): JSX.Element => (
  <NewspaperSlice slice={NewspaperSliceFixture} />
);
