import { withKnobs, files, text } from "@storybook/addon-knobs";

import { ComponentDecorator } from "%storybook/decorators/component";

import { DeviceFeaturePhone } from ".";

export default {
  title: "Components/DeviceFeaturePhone",
  decorators: [withKnobs, ComponentDecorator],
};

export const Render = (): JSX.Element => (
  <DeviceFeaturePhone
    figure={
      <img
        src={
          files("figure", "", ["https://placehold.it/496x390?text=figure"])[0]
        }
        alt=""
      />
    }
  >
    <p>{text("caption", "caption")}</p>
  </DeviceFeaturePhone>
);
