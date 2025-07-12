import { faker } from "@faker-js/faker";
import type { Meta } from "@storybook/nextjs";

import Group from ".";

export default {
  component: Group,
  title: "Layout/Group",
  args: {
    design: "default",
    children: faker.lorem.paragraph(),
  },
  parameters: {
    layout: "fullscreen",
  },
} as Meta;

export const DefaultDesign = {
  args: {
    design: "default",
  },
};

export const AlternateDesign = {
  args: {
    design: "alternate",
  },
};
