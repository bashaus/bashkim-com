import React from "react";
import { storiesOf } from "@storybook/react";

import JSONDecorator from "%storybook/decorators/json";

import CarouselPhonesSliceType from "./component.jsx";
import fixture from "./fixture.json";
import schema from "./schema.json";

const stories = storiesOf("Prismic Slice Types: CarouselPhones", module);

stories
  .add("example", (): JSX.Element => (
    <CarouselPhonesSliceType slice={fixture} />
  ))

  .add("schema", (): JSX.Element => <JSONDecorator schema={schema} />);
