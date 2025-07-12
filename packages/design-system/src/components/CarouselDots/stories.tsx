import Container from "@mui/material/Container";
import type { Meta, StoryFn } from "@storybook/nextjs";

import CarouselProvider from "../CarouselProvider";
import CarouselViewport from "../CarouselViewport";
import CarouselDots from ".";

export default {
  component: CarouselDots,
  title: "Components/CarouselDots",
  parameters: {
    layout: "centered",
  },
} as Meta;

const Template: StoryFn = () => (
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

export const Fixture = {
  render: Template,
};
