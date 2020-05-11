import React from "react";
import { withKnobs, text } from "@storybook/addon-knobs";

import PartialHeaderText from ".";

export default {
  title: "Partials/Header Text",
  decorators: [withKnobs],
};

export const Render = (): JSX.Element => (
  <PartialHeaderText>
    <h1>{text("<h1>", "Hello World")}</h1>
    <p>{text("<p>", "Lorem ipsum dolar sit a met")}</p>
  </PartialHeaderText>
);
