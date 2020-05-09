import React from "react";
import { withKnobs, text } from "@storybook/addon-knobs";

import CallToAction from ".";

export default {
  title: "Components/CallToAction",
  decorators: [withKnobs],
};

export const Render = (): JSX.Element => (
  <CallToAction>
    <a>
      <span>{text("content", "Content")}</span>
    </a>
  </CallToAction>
);
