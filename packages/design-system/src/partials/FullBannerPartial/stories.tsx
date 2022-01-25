import { Meta, Story } from "@storybook/react";
import faker from "faker";

import {
  FullBannerPartial as FullBannerPartialComponent,
  FullBannerPartialProps,
} from ".";

export default {
  component: FullBannerPartialComponent,
  title: "Partials/Full Banner Partial",
  args: {
    backgroundDesktop: [
      "https://via.placeholder.com/1920x400?text=backgroundDesktop",
    ],
    backgroundMobile: [
      "https://via.placeholder.com/1000x800?text=backgroundMobile",
    ],
    title: "FullBannerPartial",
    subtitle: faker.lorem.paragraph(),
  },
  argTypes: {
    backgroundDesktop: { control: "file" },
    backgroundMobile: { control: "file" },
    id: { defaultValue: "FullBannerPartial" },
    title: {
      control: "text",
      table: { category: "Story helpers" },
    },
    subtitle: {
      control: "text",
      table: { category: "Story helpers" },
    },
  },
} as Meta;

type FullBannerPartialStoryProps = Omit<
  FullBannerPartialProps,
  "backgroundDesktop" | "backgroundMobile"
> & {
  backgroundDesktop: Array<string>;
  backgroundMobile: Array<string>;
  title: string;
  subtitle: string;
};

const Template: Story<FullBannerPartialStoryProps> = ({
  backgroundDesktop,
  backgroundMobile,
  title,
  subtitle,
  ...args
}: FullBannerPartialStoryProps) => (
  <FullBannerPartialComponent
    backgroundDesktop={backgroundDesktop[0]}
    backgroundMobile={backgroundMobile[0]}
    {...args}
  >
    <h3>{title}</h3>
    <p>{subtitle}</p>
  </FullBannerPartialComponent>
);

export const FullBannerPartial = Template.bind({});
