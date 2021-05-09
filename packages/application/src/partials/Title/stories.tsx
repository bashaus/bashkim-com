import { withKnobs, files, text } from "@storybook/addon-knobs";

import { PartialTitle } from ".";

export default {
  title: "Partials/Title",
  decorators: [withKnobs],
};

export const Render = (): JSX.Element => (
  <PartialTitle
    image={
      files("image", "", ["https://via.placeholder.com/300x300?text=image"])[0]
    }
  >
    <h1>{text("Title", "Hello World")}</h1>
    <p>{text("Description", "Lorem ipsum dolar sit a met.")}</p>
  </PartialTitle>
);
