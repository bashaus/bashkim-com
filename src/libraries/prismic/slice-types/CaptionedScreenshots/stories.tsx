import React from "react";
import JSONDecorator from "%storybook/decorators/json";

import CaptionedScreenshotsSliceType from "./component";
import CaptionedScreenshotsSlicePropType from "./type";

import fixture from "./fixture.json";
import schema from "./schema.json";

export default {
  title: "Prismic/Slice Types/Captioned Screenshots",
};

export const Render = (): JSX.Element => (
  <CaptionedScreenshotsSliceType
    slice={fixture as CaptionedScreenshotsSlicePropType}
  />
);

export const Schema = (): JSX.Element => <JSONDecorator schema={schema} />;
