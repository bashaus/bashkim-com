import { withKnobs, files } from "@storybook/addon-knobs";

import { PartialHeaderImage } from ".";

export default {
  title: "Partials/Header Image",
  decorators: [withKnobs],
};

export const Render = (): JSX.Element => (
  <PartialHeaderImage
    id="PartialHeaderImage"
    imageDesktop={
      files("imageDesktop", "", [
        "https://via.placeholder.com/1920x400?text=imageDesktop",
      ])[0]
    }
    imageMobile={
      files("imageMobile", "", [
        "https://via.placeholder.com/1000x8000?text=imageMobile",
      ])[0]
    }
  />
);
