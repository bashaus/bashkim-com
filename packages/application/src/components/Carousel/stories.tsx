import faker from "faker";

import { Carousel, CarouselProps } from ".";

export default {
  component: Carousel,
  title: "Components/Carousel",
  argTypes: {
    slides: { control: "number" },
  },
  parameters: {
    layout: "centered",
  },
};

type CarouselStoryProps = CarouselProps & {
  slides: number;
};

const Template = ({ slides, ...args }: CarouselStoryProps) => (
  <div
    style={{
      width: "100vw",
      maxWidth: 600,
      marginLeft: 30,
      marginRight: 30,
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
Render.args = {
  slides: 3,
};
