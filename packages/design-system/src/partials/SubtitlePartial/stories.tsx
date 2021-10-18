import faker from "faker";

import { SubtitlePartial, SubtitlePartialProps } from ".";

export default {
  components: SubtitlePartial,
  title: "Partials/SubtitlePartial",
  argTypes: {
    title: { control: "text" },
    subtitle: { control: "text" },
  },
};

type SubtitlePartialStoryProps = SubtitlePartialProps & {
  title: string;
  subtitle: string;
};

const Template = ({ title, subtitle, ...args }: SubtitlePartialStoryProps) => (
  <SubtitlePartial {...args}>
    <h2>{title}</h2>
    <p>{subtitle}</p>
  </SubtitlePartial>
);

export const Render = Template.bind({});
Render.args = {
  title: "SubtitlePartial",
  subtitle: faker.lorem.sentence(8),
};
