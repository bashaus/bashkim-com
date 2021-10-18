import faker from "faker";

import { TitlePartial, TitlePartialProps } from ".";

export default {
  component: TitlePartial,
  title: "Partials/TitlePartial",
  argTypes: {
    image: { control: "file" },
    title: { control: "text" },
    subtitle: { control: "text" },
  },
};

type TitlePartialStoryProps = TitlePartialProps & {
  image: Array<string>;
  title: string;
  subtitle: string;
};

const Template = ({
  image,
  title,
  subtitle,
  ...args
}: TitlePartialStoryProps) => (
  <TitlePartial image={image[0]} {...args}>
    <h1>{title}</h1>
    <p>{subtitle}</p>
  </TitlePartial>
);

export const Render = Template.bind({});
Render.args = {
  image: ["https://via.placeholder.com/300x300?text=image"],
  title: "TitlePartial",
  subtitle: faker.lorem.sentence(8),
};
