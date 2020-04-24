import React from "react";
import { storiesOf } from "@storybook/react";

import JSONDecorator from "%storybook/decorators/json";

import SubtitleSliceType from "./component.jsx";
import fixture from "./fixture.json";
import schema from "./schema.json";

const stories = storiesOf("Prismic Slice Types: Subtitle", module);

stories
  .add("example", (): JSX.Element => <SubtitleSliceType slice={fixture} />)

  .add("schema", (): JSX.Element => <JSONDecorator schema={schema} />);
