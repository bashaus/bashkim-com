import Container from "@mui/material/Container";
import type { Meta, StoryObj } from "@storybook/nextjs";

import CarouselProvider from "../CarouselProvider";
import CarouselViewport from "../CarouselViewport";
import CarouselDots from ".";

const CarouselDotsRenderer = () => (
  <Container maxWidth="md">
    <CarouselProvider>
      <CarouselViewport>
        <div>One</div>
        <div>Two</div>
        <div>Three</div>
      </CarouselViewport>

      <CarouselDots />
    </CarouselProvider>
  </Container>
);

const meta = {
  component: CarouselDots,
  title: "Components/Carousel Dots",
  parameters: {
    layout: "centered",
  },
  render: CarouselDotsRenderer,
} satisfies Meta<typeof CarouselDots>;

type Story = StoryObj<typeof meta>;

export const Fixture = {} satisfies Story;

export default meta;
