import { withKnobs, files, text } from "@storybook/addon-knobs";

import { ComponentDecorator } from "%storybook/decorators/component";

import { Brick } from ".";

export default {
  title: "Components/Brick",
  decorators: [withKnobs, ComponentDecorator],
};

export const Render = (): JSX.Element => (
  <Brick
    title={text("title", "Brick title")}
    description={text("description", "Brick description")}
    icon={files("icon", "", ["https://placehold.it/300x300?text=icon"])[0]}
  />
);
