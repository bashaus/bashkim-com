import type { Meta, StoryFn } from "@storybook/react";

import DateFormatter, { DateFormatterProps } from ".";

export default {
  component: DateFormatter,
  title: "Formatters/Date Formatter",
  args: {
    date: new Date(),
  },
  argTypes: {
    date: {
      control: "date",
    },
  },
  parameters: {
    layout: "centered",
  },
} as Meta;

const Template: StoryFn<DateFormatterProps> = ({
  date,
  ...args
}: DateFormatterProps) => <DateFormatter date={new Date(date)} {...args} />;

export const Fixture = {
  render: Template,
};
