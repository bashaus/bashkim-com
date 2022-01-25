import { Meta, Story } from "@storybook/react";
import faker from "faker";

import { Carousel, CarouselProps } from ".";

export default {
  component: Carousel,
  title: "Components/Carousel",
  args: {
    slides: 3,
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

type CarouselStoryProps = CarouselProps & {
  slides: number;
};

const Template: Story<CarouselStoryProps> = ({
  slides,
  ...args
}: CarouselStoryProps) => (
  <div
    style={{
      width: "100vw",
      maxWidth: 600,
    }}
  >
    <Carousel {...args}>
      {Array(slides)
        .fill("")
        .map((_value, index) => (
          <div key={index}>
            <h3>Slide {index + 1}</h3>
            <p>{faker.lorem.paragraph(2)}</p>
            <p>{faker.lorem.paragraph(2)}</p>
            <p>{faker.lorem.paragraph(2)}</p>
          </div>
        ))}
    </Carousel>
  </div>
);

export const Render = Template.bind({});
