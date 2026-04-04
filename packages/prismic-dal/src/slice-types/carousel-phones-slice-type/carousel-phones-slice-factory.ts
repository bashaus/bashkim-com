import { Factory } from "fishery";

import { CarouselPhonesSliceTypeFragment } from "../../gql/graphql";
import { carouselPhonesSliceFieldFactory } from "./carousel-phones-slice-field-factory";

export const carouselPhonesSliceFactory =
  Factory.define<CarouselPhonesSliceTypeFragment>(() => {
    return {
      type: "CarouselPhonesSliceType",
      label: null,
      fields: carouselPhonesSliceFieldFactory.buildList(4),
    };
  });
