import React from "react";
import { AccoladeSliceFixture } from "@bashkim-com/prismic";

import AccoladeSlice from ".";

export default {
  title: "Slices/Accolade",
};

export const Render = (): JSX.Element => (
  <AccoladeSlice slice={AccoladeSliceFixture} />
);
