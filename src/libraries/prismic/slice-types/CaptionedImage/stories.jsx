import React from "react";
import { storiesOf } from "@storybook/react";

import JSONDecorator from "%storybook/decorators/json";

import CaptionedImageSliceType from "./component.jsx";
import fixture from "./fixture.json";
import schema from "./schema.json";

const stories = storiesOf("Prismic Slice Types: CaptionedImage", module);

stories
  .add("example", (): JSX.Element => (
    <CaptionedImageSliceType slice={fixture} />
  ))

  .add("schema", (): JSX.Element => <JSONDecorator schema={schema} />);
