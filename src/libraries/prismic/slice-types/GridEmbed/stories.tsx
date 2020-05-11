import React from "react";
import JSONDecorator from "%storybook/decorators/json";

import GridEmbedSliceType from "./component";
import GridEmbedSlicePropType from "./type";

import fixture from "./fixture.json";
import schema from "./schema.json";

export default {
  title: "Prismic/Slice Types/Grid Embed",
};

export const Render = (): JSX.Element => (
  <GridEmbedSliceType slice={fixture as GridEmbedSlicePropType} />
);

export const Schema = (): JSX.Element => <JSONDecorator schema={schema} />;
