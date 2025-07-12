import { faker } from "@faker-js/faker";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import type { Meta, StoryFn } from "@storybook/nextjs";

import Carousel, { CarouselProps } from ".";

export default {
  component: Carousel,
  title: "Components/Carousel",
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
  },
  parameters: {
    layout: "centered",
  },
} as Meta;

type CarouselStoryProps = Readonly<
  CarouselProps & {
    slides: number;
  }
>;

const Template: StoryFn<CarouselStoryProps> = ({
  slides,
  ...args
}: CarouselStoryProps) => (
  <Container maxWidth="md">
    <Carousel {...args}>
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
    </Carousel>
  </Container>
);

export const Fixture = {
  render: Template,
};
