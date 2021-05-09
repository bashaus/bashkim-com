import { withKnobs, files, text } from "@storybook/addon-knobs";

import { ComponentDecorator } from "%storybook/decorators/component";

import { Tile } from ".";

export default {
  title: "Components/Tile",
  decorators: [withKnobs, ComponentDecorator],
};

export const Render = (): JSX.Element => (
  <div
    style={{
      maxWidth: 200,
    }}
  >
    <Tile
      description={text("description", "description")}
      icon={files("icon", "", ["https://placehold.it/300x300?text=icon"])[0]}
      poster={
        files("poster", "", ["https://placehold.it/640x360?text=poster"])[0]
      }
      title={text("title", "title")}
    />
  </div>
);
