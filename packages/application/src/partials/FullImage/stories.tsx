import { withKnobs, files } from "@storybook/addon-knobs";

import { PartialFullImage } from ".";

export default {
  title: "Partials/Full Image",
  decorators: [withKnobs],
};

export const Render = (): JSX.Element => (
  <PartialFullImage>
    <img
      alt=""
      src={
        files("figure", "", [
          "https://via.placeholder.com/1200x630?text=figure",
        ])[0]
      }
    />
  </PartialFullImage>
);
