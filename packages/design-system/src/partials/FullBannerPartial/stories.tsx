import faker from "faker";

import { FullBannerPartial, FullBannerPartialProps } from ".";

export default {
  component: FullBannerPartial,
  title: "Partials/FullBannerPartial",
  argTypes: {
    backgroundDesktop: { control: "file" },
    backgroundMobile: { control: "file" },
    title: { control: "text" },
    subtitle: { control: "text" },
    id: { defaultValue: "FullBannerPartial" },
  },
};

type FullBannerPartialStoryProps = FullBannerPartialProps & {
  backgroundDesktop: Array<string>;
  backgroundMobile: Array<string>;
  title: string;
  subtitle: string;
};

const Template = ({
  backgroundDesktop,
  backgroundMobile,
  title,
  subtitle,
  ...args
}: FullBannerPartialStoryProps) => (
  <FullBannerPartial
    backgroundDesktop={backgroundDesktop[0]}
    backgroundMobile={backgroundMobile[0]}
    {...args}
  >
    <h3>{title}</h3>
    <p>{subtitle}</p>
  </FullBannerPartial>
);

export const Render = Template.bind({});
Render.args = {
  backgroundDesktop: [
    "https://via.placeholder.com/1920x400?text=backgroundDesktop",
  ],
  backgroundMobile: [
    "https://via.placeholder.com/1000x800?text=backgroundMobile",
  ],
  title: "FullBannerPartial",
  subtitle: faker.lorem.paragraph(),
};
