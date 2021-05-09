import { withKnobs, files, text } from "@storybook/addon-knobs";

import { ComponentDecorator } from "%storybook/decorators/component";

import { DeviceSmartphone } from ".";

export default {
  title: "Components/DeviceSmartphone",
  decorators: [withKnobs, ComponentDecorator],
};

export const Render = (): JSX.Element => (
  <DeviceSmartphone
    figure={
      <img
        src={
          files("figure", "", [
            "https://via.placeholder.com/640x1130?text=figure",
          ])[0]
        }
        alt=""
      />
    }
  >
    <p>{text("caption", "caption")}</p>
  </DeviceSmartphone>
);
