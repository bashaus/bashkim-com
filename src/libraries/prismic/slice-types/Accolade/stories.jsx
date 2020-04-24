import React from "react";
import { storiesOf } from "@storybook/react";

import JSONDecorator from "%storybook/decorators/json";

import AccoladeSliceType from "./component.jsx";
import fixture from "./fixture.json";
import schema from "./schema.json";

const stories = storiesOf("Prismic Slice Types: Accolade", module);

stories
  .add("example", (): JSX.Element => <AccoladeSliceType slice={fixture} />)

  .add("schema", (): JSX.Element => <JSONDecorator schema={schema} />);
