import React from "react";
import faker from "faker";

import { PartialFullBanner, PartialFullBannerProps } from ".";

export default {
  component: PartialFullBanner,
  title: "Partials/Full Banner",
  argTypes: {
    backgroundDesktop: { control: "file" },
    backgroundMobile: { control: "file" },
    title: { control: "text" },
    subtitle: { control: "text" },
    id: { defaultValue: "PartialFullBanner" },
  },
};

type PartialFullBannerStoryProps = PartialFullBannerProps & {
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
}: PartialFullBannerStoryProps) => (
  <PartialFullBanner
    backgroundDesktop={backgroundDesktop[0]}
    backgroundMobile={backgroundMobile[0]}
    {...args}
  >
    <h3>{title}</h3>
    <p>{subtitle}</p>
  </PartialFullBanner>
);

export const Render = Template.bind({});
Render.args = {
  backgroundDesktop: [
    "https://via.placeholder.com/1920x400?text=backgroundDesktop",
  ],
  backgroundMobile: [
    "https://via.placeholder.com/1000x800?text=backgroundMobile",
  ],
  title: "PartialFullBanner",
  subtitle: faker.lorem.paragraph(),
};
