import type { Meta, StoryFn } from "@storybook/react";

import LifespanFormatter, { LifespanFormatterProps } from ".";

export default {
  component: LifespanFormatter,
  title: "Formatters/Lifespan Formatter",
  args: {
    startDate: new Date("2020-01-01").toDateString(),
    endDate: new Date("2020-02-01").toDateString(),
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

const Template: StoryFn<LifespanFormatterProps> = ({
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

export const Fixture = {
  render: Template,
};
