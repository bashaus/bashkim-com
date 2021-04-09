import { GridVideoSliceFixture } from "@bashkim-com/prismic";

import GridVideoSlice from ".";

export default {
  title: "Slices/Grid Video",
};

export const Render = (): JSX.Element => (
  <GridVideoSlice slice={GridVideoSliceFixture} />
);
