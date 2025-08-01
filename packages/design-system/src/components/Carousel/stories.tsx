import { faker } from "@faker-js/faker";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import type { Meta, StoryObj } from "@storybook/nextjs";

import Carousel, { CarouselProps } from ".";

type CarouselRendererProps = Readonly<
  CarouselProps & {
    slides: number;
  }
>;

const CarouselRenderer = ({ slides, ...args }: CarouselRendererProps) => (
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

const meta = {
  component: Carousel,
  title: "Components/Carousel",
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
  render: CarouselRenderer,
} satisfies Meta<typeof CarouselRenderer>;

type Story = StoryObj<typeof meta>;

export const Fixture = {
  args: {
    slides: 3,
    slidesVisible: 1,
  },
} satisfies Story;

export default meta;
