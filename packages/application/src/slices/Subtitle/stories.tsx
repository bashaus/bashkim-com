import React from "react";
import { SubtitleSliceFixture } from "@bashkim-com/prismic";

import SubtitleType from ".";

export default {
  title: "Slices/Subtitle",
};

export const Render = (): JSX.Element => (
  <SubtitleType slice={SubtitleSliceFixture} />
);
