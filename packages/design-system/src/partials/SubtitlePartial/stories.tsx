import { faker } from "@faker-js/faker";
import Typography from "@mui/material/Typography";
import type { Meta, StoryObj } from "@storybook/nextjs";

import SubtitlePartial from ".";

const meta = {
  component: SubtitlePartial,
  title: "Partials/Subtitle Partial",
} satisfies Meta<typeof SubtitlePartial>;

type Story = StoryObj<typeof meta>;

export const Fixture = {
  args: {
    children: (
      <>
        <Typography variant="h4" component="h2" gutterBottom>
          {faker.lorem.words(3)}
        </Typography>
        <Typography>{faker.lorem.words(9)}</Typography>
      </>
    ),
  },
} satisfies Story;

export default meta;
