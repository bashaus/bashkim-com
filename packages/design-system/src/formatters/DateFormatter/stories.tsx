import type { Meta, StoryFn } from "@storybook/react";

import { DateFormatter as DateFormatterComponent, DateFormatterProps } from ".";

export default {
  component: DateFormatterComponent,
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
}: DateFormatterProps) => (
  <DateFormatterComponent date={new Date(date)} {...args} />
);

export const Now = {
  render: Template,
};

export const January = {
  render: Template,
  args: { date: new Date("2020-01-01T00:00:00Z") },
};

export const February = {
  render: Template,
  args: { date: new Date("2020-02-01T00:00:00Z") },
};

export const March = {
  render: Template,
  args: { date: new Date("2020-03-01T00:00:00Z") },
};

export const April = {
  render: Template,
  args: { date: new Date("2020-04-01T00:00:00Z") },
};

export const May = {
  render: Template,
  args: { date: new Date("2020-05-01T00:00:00Z") },
};

export const June = {
  render: Template,
  args: { date: new Date("2020-06-01T00:00:00Z") },
};

export const July = {
  render: Template,
  args: { date: new Date("2020-07-01T00:00:00Z") },
};

export const August = {
  render: Template,
  args: { date: new Date("2020-08-01T00:00:00Z") },
};

export const September = {
  render: Template,
  args: { date: new Date("2020-09-01T00:00:00Z") },
};

export const October = {
  render: Template,
  args: { date: new Date("2020-10-01T00:00:00Z") },
};

export const November = {
  render: Template,
  args: { date: new Date("2020-11-01T00:00:00Z") },
};

export const December = {
  render: Template,
  args: { date: new Date("2020-12-01T00:00:00Z") },
};
