import type { Meta, StoryFn } from "@storybook/react";
import { placeholderImage } from "placeholder-image-data-url-svg";

import { Turn as TurnComponent, TurnProps } from ".";

export default {
  component: TurnComponent,
  title: "Components/Turn",
  args: {
    pages: 6,
  },
  parameters: {
    layout: "centered",
  },
} as Meta;

const Template: StoryFn<TurnProps> = (args: TurnProps) => (
  <div style={{ maxWidth: 800, width: "100vw" }}>
    <TurnComponent {...args} pageWidth={300} pageHeight={450}>
      {Array(args.pages)
        .fill("")
        .map((_value, i) => i + 1)
        .map((value) => (
          <div key={value}>
            <img
              src={placeholderImage({
                width: 300,
                height: 450,
                text: `Page ${value}`,
              })}
              alt={`Page ${value}`}
            />
          </div>
        ))}
    </TurnComponent>
  </div>
);

export const Turn = {
  render: Template,
};
