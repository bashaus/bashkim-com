import React from "react";
import { withKnobs, text } from "@storybook/addon-knobs";

import PartialSubtitle from ".";

export default {
  title: "Partials/Subtitle",
  decorators: [withKnobs],
};

export const Render = (): JSX.Element => (
  <PartialSubtitle>
    <h2>{text("heading", "heading")}</h2>
    <p>{text("subtitle", "subheading")}</p>
  </PartialSubtitle>
);
