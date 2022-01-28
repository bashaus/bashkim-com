import type { Meta, Story } from "@storybook/react";

import { Carousel as CarouselComponent, CarouselProps } from ".";

export default {
  component: CarouselComponent,
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
    <CarouselComponent {...args}>
      {Array(slides)
        .fill("")
        .map((_value, index) => (
          <div key={index}>
            <h3>Slide {index + 1}</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              ultrices ex ut diam suscipit rhoncus. Cras a ligula porta, dictum
              turpis et, euismod neque. Phasellus pulvinar est cursus, lobortis
              odio.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              mattis urna id ipsum semper dictum. Donec porttitor tempus arcu,
              eu egestas lectus commodo eget. Ut venenatis, tellus vitae aliquet
              vestibulum.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              viverra neque et nulla luctus feugiat. Suspendisse potenti. Sed
              euismod consectetur purus eu mattis. Sed eleifend erat vehicula
              magna convallis, quis.
            </p>
          </div>
        ))}
    </CarouselComponent>
  </div>
);

export const Carousel = Template.bind({});
