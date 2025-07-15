import type { Meta, StoryObj } from "@storybook/nextjs";

import LifespanFormatter from ".";

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
} satisfies Meta<typeof LifespanFormatter>;

type Story = StoryObj<typeof meta>;

export const StartDate = {
  args: {
    startDate: new Date().toDateString(),
    endDate: undefined,
  },
} satisfies Story;

export const StartAndEndDate = {
  args: {
    startDate: new Date("2020-01-01").toDateString(),
    endDate: new Date("2020-02-02").toDateString(),
  },
} satisfies Story;

export default meta;
