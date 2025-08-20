import { faker } from "@faker-js/faker";
import Box from "@mui/material/Box";
import type { Meta, StoryObj } from "@storybook/nextjs";

import FlipCardContainer from "../FlipCardContainer";
import FlipCardFaceBack from "../FlipCardFaceBack";
import FlipCardFaceFront from "../FlipCardFaceFront";
import FlipCard from ".";

const meta = {
  component: FlipCard,
  title: "Flip Card/Flip Card",
  args: {
    children: faker.lorem.paragraph(),
  },
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <FlipCardContainer>
        <Box sx={{ width: "100%", height: "100vh" }}>
          <Story />
        </Box>
      </FlipCardContainer>
    ),
  ],
} satisfies Meta<typeof FlipCard>;

type Story = StoryObj<typeof meta>;

export const Example = {
  args: {
    children: (
      <>
        <FlipCardFaceFront
          style={{
            background: "black",
            color: "white",
          }}
        >
          <p>Front</p>
        </FlipCardFaceFront>

        <FlipCardFaceBack
          style={{
            background: "white",
            color: "black",
          }}
        >
          <p>Back</p>
        </FlipCardFaceBack>
      </>
    ),
  },
} satisfies Story;

export default meta;
