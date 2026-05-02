import { faker } from "@faker-js/faker";
import type { Meta, StoryObj } from "@storybook/nextjs";

import ScrollLockContainer from "../../scroll-lock/ScrollLockContainer";
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
      <ScrollLockContainer minHeight="100vh">
        <Story />
      </ScrollLockContainer>
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
