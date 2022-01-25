import { Meta, Story } from "@storybook/react";

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

const Template: Story<TurnProps> = (args: TurnProps) => (
  <div style={{ maxWidth: 800, width: "100vw" }}>
    <TurnComponent {...args} pageWidth={300} pageHeight={450}>
      {Array(args.pages)
        .fill("")
        .map((_value, index) => (
          <div key={index}>
            <img
              src={`https://via.placeholder.com/300x450?text=Page+${index + 1}`}
              alt={`Page ${index + 1}`}
            />
          </div>
        ))}
    </TurnComponent>
  </div>
);

export const Turn = Template.bind({});
