import React from "react";
import { withKnobs, files, text } from "@storybook/addon-knobs";
import ComponentDecorator from "%storybook/decorators/component";

import SentryBoundary from ".";

export default {
  title: "Components/SentryBoundary",
  decorators: [withKnobs, ComponentDecorator],
};

const ThrowErrorComponent = () => {
  throw new Error("Error");
};

export const Render = (): JSX.Element => (
  <SentryBoundary>
    <ThrowErrorComponent />
  </SentryBoundary>
);
