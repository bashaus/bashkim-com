import React from "react";
import JSONDecorator from "%storybook/decorators/json";

import CarouselImagesSliceType from "./component";
import CarouselImagesSlicePropType from "./type";

import fixture from "./fixture.json";
import schema from "./schema.json";

export default {
  title: "Prismic/Slice Types/Carousel Images",
};

export const Render = (): JSX.Element => (
  <CarouselImagesSliceType slice={fixture as CarouselImagesSlicePropType} />
);

export const Schema = (): JSX.Element => <JSONDecorator schema={schema} />;
