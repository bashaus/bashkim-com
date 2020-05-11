import React from "react";
import JSONDecorator from "%storybook/decorators/json";

import CarouselPhonesSliceType from "./component";
import CarouselPhonesSlicePropType from "./type";

import fixture from "./fixture.json";
import schema from "./schema.json";

export default {
  title: "Prismic/Slice Types/Carousel Phones",
};

export const Render = (): JSX.Element => (
  <CarouselPhonesSliceType slice={fixture as CarouselPhonesSlicePropType} />
);

export const Schema = (): JSX.Element => <JSONDecorator schema={schema} />;
