import Container from "@mui/material/Container";
import type { Meta, StoryObj } from "@storybook/nextjs";

import CarouselProvider from "../CarouselProvider";
import CarouselViewport from "../CarouselViewport";
import CarouselSlider from ".";

const CarouselSliderRenderer = () => (
  <Container maxWidth="md">
    <CarouselProvider>
      <CarouselViewport>
        <div>One</div>
        <div>Two</div>
        <div>Three</div>
      </CarouselViewport>

      <CarouselSlider />
    </CarouselProvider>
  </Container>
);

const meta = {
  component: CarouselSlider,
  title: "Components/Carousel Slider",
  parameters: {
    layout: "centered",
  },
  render: CarouselSliderRenderer,
} satisfies Meta<typeof CarouselSlider>;

type Story = StoryObj<typeof meta>;

export const Fixture = {} satisfies Story;

export default meta;
