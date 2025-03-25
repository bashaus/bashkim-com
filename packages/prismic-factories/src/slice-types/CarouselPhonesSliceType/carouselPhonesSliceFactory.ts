import type { CarouselPhonesSliceTypeFragment } from "@bashkim-com/prismic-dal";
import { Factory } from "fishery";

import carouselPhonesSliceFieldFactory from "./carouselPhonesSliceFieldFactory";

const carouselPhonesSliceFactory =
  Factory.define<CarouselPhonesSliceTypeFragment>(() => {
    return {
      type: "CarouselPhonesSliceType",
      label: null,
      fields: carouselPhonesSliceFieldFactory.buildList(4),
    };
  });

export default carouselPhonesSliceFactory;
