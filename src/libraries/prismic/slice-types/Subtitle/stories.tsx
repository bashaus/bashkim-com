import React from "react";
import JSONDecorator from "%storybook/decorators/json";

import SubtitleSliceType from "./component";
import SubtitleSlicePropType from "./type";

import fixture from "./fixture.json";
import schema from "./schema.json";

export default {
  title: "Prismic/Slice Types/Subtitle",
};

export const Render = (): JSX.Element => (
  <SubtitleSliceType slice={fixture as SubtitleSlicePropType} />
);

export const Schema = (): JSX.Element => <JSONDecorator schema={schema} />;
