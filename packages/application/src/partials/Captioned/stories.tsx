import { withKnobs, files, text } from "@storybook/addon-knobs";

import { PartialCaptioned } from ".";

export default {
  title: "Partials/Captioned",
  decorators: [withKnobs],
};

export const Render = (): JSX.Element => (
  <PartialCaptioned
    figure={
      <img
        src={
          files("figure", "", [
            "https://via.placeholder.com/1200x630?text=figure",
          ])[0]
        }
        alt=""
      />
    }
  >
    <h3>{text("heading", "heading")}</h3>
    <p>{text("text", "text")}</p>
  </PartialCaptioned>
);
