import faker from "faker";
import React from "react";
import { withKnobs, text } from "@storybook/addon-knobs";

import PartialFullText from ".";

export default {
  title: "Partials/Full Text",
  decorators: [withKnobs],
};

export const Render = (): JSX.Element => (
  <PartialFullText>
    <h3>{text("heading", "heading")}</h3>
    {Array(6)
      .fill("")
      .map(() => (
        <p>{faker.lorem.paragraph()}</p>
      ))}
  </PartialFullText>
);
