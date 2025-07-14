import type { Meta, StoryObj } from "@storybook/nextjs";

import LifespanFormatter, { LifespanFormatterProps } from ".";

const LifespanFormatterRenderer = ({
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

const meta = {
  component: LifespanFormatter,
  title: "Formatters/Lifespan Formatter",
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
  render: LifespanFormatterRenderer,
} satisfies Meta<typeof LifespanFormatter>;

type Story = StoryObj<typeof meta>;

export const Fixture = {
  args: {
    startDate: new Date("2020-01-01"),
    endDate: new Date("2020-02-01"),
  },
} satisfies Story;

export default meta;
