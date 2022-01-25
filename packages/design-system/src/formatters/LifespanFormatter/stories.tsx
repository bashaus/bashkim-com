import { Meta, Story } from "@storybook/react";

import { LifespanFormatter, LifespanFormatterProps } from ".";

export default {
  component: LifespanFormatter,
  title: "Formatters/LifespanFormatter",
  argTypes: {
    startDate: {
      control: "date",
      defaultValue: new Date().toDateString(),
    },
    endDate: {
      control: "date",
      defaultValue: new Date().toDateString(),
    },
  },
  parameters: {
    layout: "centered",
  },
} as Meta;

const Template: Story<LifespanFormatterProps> = ({
  startDate,
  endDate,
  ...args
}: LifespanFormatterProps) => (
  <LifespanFormatter
    startDate={new Date(startDate)}
    endDate={endDate ? new Date(endDate) : undefined}
    {...args}
  />
);

export const Render = Template.bind({});
