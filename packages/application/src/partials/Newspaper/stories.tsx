import faker from "faker";

import { PartialNewspaper, PartialNewspaperProps } from ".";

export default {
  component: PartialNewspaper,
  title: "Partials/Newspaper",
  argTypes: {
    paragraphs: { control: "number", min: 1, max: 100 },
  },
};

type PartialNewspaperStoryProps = PartialNewspaperProps & {
  paragraphs: number;
};

const Template = ({ paragraphs, ...args }: PartialNewspaperStoryProps) => (
  <PartialNewspaper {...args}>
    {Array(paragraphs)
      .fill("")
      .map((_value, index) => (
        <div key={index}>
          Paragraph {index + 1}: {faker.lorem.paragraph()}
        </div>
      ))}
  </PartialNewspaper>
);

export const Render = Template.bind({});
Render.args = {
  paragraphs: 10,
};
