import type { Meta, Story } from "@storybook/react";

import {
  LifespanFormatter as LifespanFormatterComponent,
  LifespanFormatterProps,
} from ".";

export default {
  component: LifespanFormatterComponent,
  title: "Formatters/Lifespan Formatter",
  args: {
    startDate: new Date().toDateString(),
    endDate: new Date().toDateString(),
  },
  argTypes: {
    startDate: {
      control: "date",
    },
    endDate: {
      control: "date",
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
  <LifespanFormatterComponent
    startDate={new Date(startDate)}
    endDate={endDate ? new Date(endDate) : undefined}
    {...args}
  />
);

export const LifespanFormatter = Template.bind({});
