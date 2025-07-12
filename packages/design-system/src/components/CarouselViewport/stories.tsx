import { faker } from "@faker-js/faker";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import type { Meta, StoryFn } from "@storybook/nextjs";

import CarouselProvider from "../CarouselProvider";
import CarouselViewport, { CarouselViewportProps } from ".";

export default {
  component: CarouselViewport,
  title: "Components/Carousel Viewport",
  args: {
    slides: 3,
    slidesVisible: 1,
  },
  argTypes: {
    slides: {
      control: "number",
      min: 1,
      table: { category: "Story helpers" },
    },
    slidesVisible: {
      control: "number",
      min: 1,
      table: { category: "Story helpers" },
    },
  },
  parameters: {
    layout: "centered",
  },
} as Meta;

type CarouselViewportStoryProps = Readonly<
  CarouselViewportProps & {
    slides: number;
    slidesVisible: number;
  }
>;

const Template: StoryFn<CarouselViewportStoryProps> = ({
  slides,
  slidesVisible,
  ...args
}: CarouselViewportStoryProps) => (
  <Container maxWidth="md">
    <CarouselProvider slidesVisible={slidesVisible}>
      <CarouselViewport {...args}>
        {Array(slides)
          .fill("")
          .map((_value, i) => i + 1)
          .map((value) => (
            <div key={value}>
              <Typography variant="h6" gutterBottom>
                Slide {value}
              </Typography>

              <Typography gutterBottom>{faker.lorem.paragraph()}</Typography>
              <Typography gutterBottom>{faker.lorem.paragraph()}</Typography>
              <Typography gutterBottom>{faker.lorem.paragraph()}</Typography>
            </div>
          ))}
      </CarouselViewport>
    </CarouselProvider>
  </Container>
);

export const Fixture = {
  render: Template,
};
