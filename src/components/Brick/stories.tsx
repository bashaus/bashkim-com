import React from "react";
import { withKnobs, files, text } from "@storybook/addon-knobs";

import Brick from ".";

export default {
  title: "Components/Brick",
  decorators: [withKnobs],
};

export const Render = (): JSX.Element => (
  <Brick
    title={text("title", "Brick title")}
    description={text("description", "Brick description")}
    icon={files("icon", "", ["https://placehold.it/150x150"])[0]}
  />
);
