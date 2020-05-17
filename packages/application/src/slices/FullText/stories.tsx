import React from "react";
import { FullTextSliceFixture } from "@bashkim-com/prismic";

import FullTextSlice from ".";

export default {
  title: "Slices/Full Text",
};

export const Render = (): JSX.Element => (
  <FullTextSlice slice={FullTextSliceFixture} />
);
