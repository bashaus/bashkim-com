import faker from "faker";

import { PartialSubtitle, PartialSubtitleProps } from ".";

export default {
  components: PartialSubtitle,
  title: "Partials/Subtitle",
  argTypes: {
    title: { control: "text" },
    subtitle: { control: "text" },
  },
};

type PartialSubtitleStoryProps = PartialSubtitleProps & {
  title: string;
  subtitle: string;
};

const Template = ({ title, subtitle, ...args }: PartialSubtitleStoryProps) => (
  <PartialSubtitle {...args}>
    <h2>{title}</h2>
    <p>{subtitle}</p>
  </PartialSubtitle>
);

export const Render = Template.bind({});
Render.args = {
  title: "PartialSubtitle",
  subtitle: faker.lorem.sentence(8),
};
