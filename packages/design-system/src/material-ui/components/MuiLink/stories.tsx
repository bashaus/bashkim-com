import { faker } from "@faker-js/faker";
import Link from "@mui/material/Link";
import type { Meta, StoryObj } from "@storybook/nextjs";

const meta = {
  component: Link,
  title: "Material UI/Link",
  args: {
    children: faker.lorem.words(3),
  },
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Link>;

type Story = StoryObj<typeof meta>;

export const Fixture = {} satisfies Story;

export default meta;
