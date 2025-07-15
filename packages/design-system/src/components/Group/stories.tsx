import { faker } from "@faker-js/faker";
import type { Meta, StoryObj } from "@storybook/nextjs";

import Group from ".";

const meta = {
  component: Group,
  title: "Components/Group",
  args: {
    design: "default",
    children: faker.lorem.paragraph(),
  },
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Group>;

type Story = StoryObj<typeof meta>;

export const DefaultDesign = {
  args: {
    design: "default",
  },
} satisfies Story;

export const AlternateDesign = {
  args: {
    design: "alternate",
  },
} satisfies Story;

export default meta;
