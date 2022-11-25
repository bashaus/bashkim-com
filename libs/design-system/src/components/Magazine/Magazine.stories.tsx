import type { Meta, Story } from "@storybook/react";

import { Magazine as MagazineComponent, MagazineProps } from "./Magazine";

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

const Template: Story<MagazineProps> = (args: MagazineProps) => (
  <div style={{ maxWidth: 600, width: "100vw" }}>
    <MagazineComponent {...args}>
      {Array(args.pages)
        .fill("")
        .map((_value, index) => (
          <div key={index}>
            <img
              src={`https://via.placeholder.com/${args.pageWidth}x${
                args.pageHeight
              }?text=Page+${index + 1}`}
              alt={`Page ${index + 1}`}
              width={args.pageWidth}
              height={args.pageHeight}
            />
          </div>
        ))}
    </MagazineComponent>
  </div>
);

export const Magazine = Template.bind({});
