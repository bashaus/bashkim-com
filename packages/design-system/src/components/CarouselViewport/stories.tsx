import { faker } from "@faker-js/faker";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import type { Meta, StoryObj } from "@storybook/nextjs";

import CarouselProvider from "../CarouselProvider";
import CarouselViewport, { CarouselViewportProps } from ".";

type CarouselViewportRendererProps = Readonly<
  CarouselViewportProps & {
    slides: number;
    slidesVisible: number;
  }
>;

const CarouselViewportRenderer = ({
  slides,
  slidesVisible,
  ...args
}: CarouselViewportRendererProps) => (
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

const meta = {
  component: CarouselViewport,
  title: "Components/Carousel Viewport",
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
  render: CarouselViewportRenderer,
} satisfies Meta<typeof CarouselViewportRenderer>;

type Story = StoryObj<typeof meta>;

export const Fixture = {
  args: {
    slides: 3,
    slidesVisible: 1,
  },
} satisfies Story;

export default meta;
