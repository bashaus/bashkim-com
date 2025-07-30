import { faker } from "@faker-js/faker";
import Box from "@mui/material/Box";
import Typography, { TypographyProps } from "@mui/material/Typography";
import type { Meta, StoryObj } from "@storybook/nextjs";

const meta = {
  component: Typography,
  title: "Material UI/Typography",
  render: (args: TypographyProps) => (
    <Box minWidth={200}>
      <Typography {...args} />
    </Box>
  ),
  parameters: {
    layout: "padded",
  },
} satisfies Meta<typeof Typography>;

type Story = StoryObj<typeof meta>;

export const Heading1 = {
  args: {
    variant: "h1",
    children: faker.lorem.words(3),
  },
} satisfies Story;

export const Heading2 = {
  args: {
    variant: "h2",
    children: faker.lorem.words(3),
  },
} satisfies Story;

export const Heading3 = {
  args: {
    variant: "h3",
    children: faker.lorem.words(3),
  },
} satisfies Story;

export const Heading4 = {
  args: {
    variant: "h4",
    children: faker.lorem.words(3),
  },
} satisfies Story;

export const Heading5 = {
  args: {
    variant: "h5",
    children: faker.lorem.words(3),
  },
} satisfies Story;

export const Heading6 = {
  args: {
    variant: "h6",
    children: faker.lorem.words(3),
  },
} satisfies Story;

export const Body1 = {
  args: {
    variant: "body1",
    children: faker.lorem.paragraph(),
  },
} satisfies Story;

export const Body2 = {
  args: {
    variant: "body2",
    children: faker.lorem.paragraph(),
  },
} satisfies Story;

export const Caption = {
  args: {
    variant: "caption",
    children: faker.lorem.sentence(),
  },
} satisfies Story;

export const Subtitle1 = {
  args: {
    variant: "subtitle1",
    children: faker.lorem.sentence(),
  },
} satisfies Story;

export const Subtitle2 = {
  args: {
    variant: "subtitle2",
    children: faker.lorem.sentence(),
  },
} satisfies Story;

export const Overline = {
  args: {
    variant: "overline",
    children: faker.lorem.sentence(),
  },
} satisfies Story;

export default meta;
