import { faker } from "@faker-js/faker";
import type { Meta, StoryObj } from "@storybook/nextjs";

import SocialsError from ".";

const meta = {
  component: SocialsError,
  title: "Socials/Socials Error",
  args: {},
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof SocialsError>;

type Story = StoryObj<typeof meta>;

export const Fixture = {
  args: {
    title: faker.lorem.words(3),
    message: faker.lorem.sentence(),
  },
} satisfies Story;

export default meta;
