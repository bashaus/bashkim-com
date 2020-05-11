import React from "react";
import JSONDecorator from "%storybook/decorators/json";

import GridVideoSliceType from "./component";
import GridVideoSlicePropType from "./type";

import fixture from "./fixture.json";
import schema from "./schema.json";

export default {
  title: "Prismic/Slice Types/Grid Video",
};

export const Render = (): JSX.Element => (
  <GridVideoSliceType slice={fixture as GridVideoSlicePropType} />
);

export const Schema = (): JSX.Element => <JSONDecorator schema={schema} />;
