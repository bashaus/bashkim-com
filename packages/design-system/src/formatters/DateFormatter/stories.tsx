import type { Meta, StoryObj } from "@storybook/nextjs";

import DateFormatter, { DateFormatterProps } from ".";

const DateFormatterRenderer = ({ date, ...args }: DateFormatterProps) => (
  <DateFormatter date={new Date(date)} {...args} />
);

const meta = {
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
  render: DateFormatterRenderer,
} satisfies Meta<typeof DateFormatter>;

type Story = StoryObj<typeof meta>;

export const Fixture = {} satisfies Story;

export default meta;
