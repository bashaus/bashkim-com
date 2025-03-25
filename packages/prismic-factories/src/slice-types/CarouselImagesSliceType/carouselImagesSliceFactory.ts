import type { CarouselImagesSliceTypeFragment } from "@bashkim-com/prismic-dal";
import { Factory } from "fishery";

import carouselImagesSliceFieldFactory from "./carouselImagesSliceFieldFactory";

const carouselImagesSliceFactory =
  Factory.define<CarouselImagesSliceTypeFragment>(() => {
    return {
      type: "CarouselImagesSliceType",
      label: null,
      fields: carouselImagesSliceFieldFactory.buildList(3),
    };
  });

export default carouselImagesSliceFactory;
