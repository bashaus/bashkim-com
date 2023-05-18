import type { Meta, StoryFn } from "@storybook/react";

import {
  LifespanFormatter as LifespanFormatterComponent,
  LifespanFormatterProps,
} from "./LifespanFormatter";

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

const Template: StoryFn<LifespanFormatterProps> = ({
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

export const LifespanFormatter = {
  render: Template,
};
