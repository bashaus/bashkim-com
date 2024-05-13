import type { Meta, StoryFn } from "@storybook/react";

import { Magazine as MagazineComponent, MagazineProps } from ".";

export default {
  component: MagazineComponent,
  title: "Components/Magazine",
  args: {
    pageWidth: 350,
    pageHeight: 450,
    spread: 1,
    pages: 6,
  },
  argTypes: {
    spread: { min: 1, max: 3 },
  },
  parameters: {
    layout: "centered",
  },
} as Meta;

const Template: StoryFn<MagazineProps> = (args: MagazineProps) => (
  <div style={{ maxWidth: 600, width: "100vw" }}>
    <MagazineComponent {...args}>
      {Array(args.pages)
        .fill("")
        .map((_value, i) => i + 1)
        .map((value) => (
          <div key={value}>
            <img
              src={`https://via.placeholder.com/${args.pageWidth}x${
                args.pageHeight
              }?text=Page+${value + 1}`}
              alt={`Page ${value + 1}`}
              width={args.pageWidth}
              height={args.pageHeight}
            />
          </div>
        ))}
    </MagazineComponent>
  </div>
);

export const Magazine = {
  render: Template,
};
