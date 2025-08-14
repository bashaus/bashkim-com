import { faker } from "@faker-js/faker";
import type { Meta, StoryObj } from "@storybook/nextjs";
import { placeholderImage } from "placeholder-image-data-url-svg";

import SocialsHeader from ".";

const meta = {
  component: SocialsHeader,
  title: "Socials/Socials Header",
  args: {},
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof SocialsHeader>;

type Story = StoryObj<typeof meta>;

export const Fixture = {
  args: {
    href: "#",
    avatarBadge: (
      <img
        alt=""
        src={placeholderImage({ width: 16, height: 16, text: "X" })}
      />
    ),
    avatarImage: (
      <img
        alt=""
        src={placeholderImage({ width: 300, height: 300, text: "avatar" })}
      />
    ),
    avatarBadgeBackground: "#000",
    textPrimary: faker.lorem.words(3),
    textSecondary: faker.lorem.words(3),
  },
} satisfies Story;

export default meta;
