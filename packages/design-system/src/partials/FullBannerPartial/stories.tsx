import { Meta, Story } from "@storybook/react";
import faker from "faker";

import { FullBannerPartial, FullBannerPartialProps } from ".";

export default {
  component: FullBannerPartial,
  title: "Partials/FullBannerPartial",
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
