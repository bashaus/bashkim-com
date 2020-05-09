import React from "react";
import JSONDecorator from "%storybook/decorators/json";

import CaptionedMagazineSliceType from "./component";
import CaptionedMagazineSlicePropType from "./type";

import fixture from "./fixture.json";
import schema from "./schema.json";

export default {
  title: "Prismic/Slice Types/Captioned Magazine",
};

export const Render = (): JSX.Element => (
  <CaptionedMagazineSliceType
    slice={fixture as CaptionedMagazineSlicePropType}
  />
);

export const Schema = (): JSX.Element => <JSONDecorator schema={schema} />;
