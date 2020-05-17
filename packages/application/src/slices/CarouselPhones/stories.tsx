import React from "react";
import { CarouselPhonesSliceFixture } from "@bashkim-com/prismic";

import CarouselPhonesSlice from ".";

export default {
  title: "Slices/Carousel Phones",
};

export const Render = (): JSX.Element => (
  <CarouselPhonesSlice slice={CarouselPhonesSliceFixture} />
);
