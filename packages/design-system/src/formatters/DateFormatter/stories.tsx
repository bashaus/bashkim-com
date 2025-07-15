import type { Meta, StoryObj } from "@storybook/nextjs";

import DateFormatter from ".";

const meta = {
  component: DateFormatter,
  title: "Formatters/Date Formatter",
  args: {
    date: new Date().toISOString(),
  },
  argTypes: {
    date: {
      control: "date",
    },
  },
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof DateFormatter>;

type Story = StoryObj<typeof meta>;

export const Today = {};

export const January = {
  args: { date: "2020-01-01T00:00:00Z" },
} satisfies Story;

export const February = {
  args: { date: "2020-02-01T00:00:00Z" },
} satisfies Story;

export const March = {
  args: { date: "2020-03-01T00:00:00Z" },
} satisfies Story;

export const April = {
  args: { date: "2020-04-01T00:00:00Z" },
} satisfies Story;

export const May = {
  args: { date: "2020-05-01T00:00:00Z" },
} satisfies Story;

export const June = {
  args: { date: "2020-06-01T00:00:00Z" },
} satisfies Story;

export const July = {
  args: { date: "2020-07-01T00:00:00Z" },
} satisfies Story;

export const August = {
  args: { date: "2020-08-01T00:00:00Z" },
} satisfies Story;

export const September = {
  args: { date: "2020-09-01T00:00:00Z" },
} satisfies Story;

export const October = {
  args: { date: "2020-10-01T00:00:00Z" },
} satisfies Story;

export const November = {
  args: { date: "2020-11-01T00:00:00Z" },
} satisfies Story;

export const December = {
  args: { date: "2020-12-01T00:00:00Z" },
} satisfies Story;

export default meta;
