import { Factory } from "fishery";

import { CarouselImagesSliceTypeFragment } from "../../gql/graphql";
import { carouselImagesSliceFieldFactory } from "./carousel-images-slice-field-factory";

export const carouselImagesSliceFactory =
  Factory.define<CarouselImagesSliceTypeFragment>(() => {
    return {
      type: "CarouselImagesSliceType",
      label: null,
      fields: carouselImagesSliceFieldFactory.buildList(3),
    };
  });
