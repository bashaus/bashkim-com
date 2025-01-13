import type { Meta, StoryFn } from "@storybook/react";
import { placeholderImage } from "placeholder-image-data-url-svg";

import FullBannerPartialComponent, { FullBannerPartialProps } from ".";

export default {
  component: FullBannerPartialComponent,
  title: "Partials/Full Banner Partial",
  args: {
    id: "FullBannerPartial",
    backgroundDesktop: [
      placeholderImage({ width: 1920, height: 400, text: "backgroundDesktop" }),
    ],
    backgroundMobile: [
      placeholderImage({ width: 1000, height: 800, text: "backgroundMobile" }),
    ],
    title: "FullBannerPartial",
    subtitle:
      "Quisque id consectetur purus. Morbi dapibus orci a lacus egestas, nec imperdiet augue aliquet. Cras id tortor augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis tortor luctus.",
  },
  argTypes: {
    backgroundDesktop: { control: "file" },
    backgroundMobile: { control: "file" },
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

const Template: StoryFn<FullBannerPartialStoryProps> = ({
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

export const FullBannerPartial = {
  render: Template,
};
