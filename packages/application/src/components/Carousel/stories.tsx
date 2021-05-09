import faker from "faker";

import { ComponentDecorator } from "%storybook/decorators/component";

import { Carousel } from ".";

export default {
  title: "Components/Carousel",
  decorators: [ComponentDecorator],
};

export const Render = (): JSX.Element => (
  <div
    style={{
      maxWidth: 600,
      marginLeft: 30,
      marginRight: 30,
    }}
  >
    <Carousel>
      <div>
        <h3>Slide 1</h3>
        <p>{faker.lorem.paragraph()}</p>
        <p>{faker.lorem.paragraph()}</p>
        <p>{faker.lorem.paragraph()}</p>
      </div>

      <div>
        <h3>Slide 2</h3>
        <p>{faker.lorem.paragraph()}</p>
        <p>{faker.lorem.paragraph()}</p>
        <p>{faker.lorem.paragraph()}</p>
      </div>

      <div>
        <h3>Slide 3</h3>
        <p>{faker.lorem.paragraph()}</p>
        <p>{faker.lorem.paragraph()}</p>
        <p>{faker.lorem.paragraph()}</p>
      </div>
    </Carousel>
  </div>
);
