import { faker } from "@faker-js/faker";
import type { Meta, StoryObj } from "@storybook/nextjs";

import SubtitlePartial from ".";

const meta = {
  component: SubtitlePartial,
  title: "Partials/Subtitle Partial",
} satisfies Meta<typeof SubtitlePartial>;

type Story = StoryObj<typeof meta>;

export const Fixture = {
  args: {
    title: faker.lorem.words(3),
    subtitle: faker.lorem.sentence(12),
  },
} satisfies Story;

export default meta;
