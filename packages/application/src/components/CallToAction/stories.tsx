import { withKnobs, text } from "@storybook/addon-knobs";

import ComponentDecorator from "%storybook/decorators/component";

import CallToAction from ".";

export default {
  title: "Components/CallToAction",
  decorators: [withKnobs, ComponentDecorator],
};

export const Render = (): JSX.Element => (
  <CallToAction>
    <a>
      <span>{text("content", "Content")}</span>
    </a>
  </CallToAction>
);
