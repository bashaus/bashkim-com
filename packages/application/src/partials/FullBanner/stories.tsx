import { withKnobs, files, text } from "@storybook/addon-knobs";

import { PartialFullBanner } from ".";

export default {
  title: "Partials/Full Banner",
  decorators: [withKnobs],
};

export const Render = (): JSX.Element => (
  <PartialFullBanner
    backgroundDesktop={
      files("backgroundDesktop", "", [
        "https://placehold.it/1920x400?text=backgroundDesktop",
      ])[0]
    }
    backgroundMobile={
      files("backgroundMobile", "", [
        "https://placehold.it/1000x800?text=backgroundMobile",
      ])[0]
    }
    id="PartialFullBanner"
  >
    <h3>{text("heading", "heading")}</h3>
    <p>{text("copy", "copy")}</p>
  </PartialFullBanner>
);
