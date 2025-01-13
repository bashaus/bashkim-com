import type { Meta, StoryFn } from "@storybook/react";
import { placeholderImage } from "placeholder-image-data-url-svg";

import PageHeaderPartialComponent, { PageHeaderPartialProps } from ".";

export default {
  component: PageHeaderPartialComponent,
  title: "Partials/Page Header Partial",
  args: {
    id: "PageHeaderPartial",
    imageDesktop: [
      placeholderImage({ width: 1920, height: 400, text: "imageDesktop" }),
    ],
    imageMobile: [
      placeholderImage({ width: 1000, height: 8000, text: "imageMobile" }),
    ],
  },
  argTypes: {
    imageDesktop: { control: "file" },
    imageMobile: { control: "file" },
  },
} as Meta;

type PageHeaderPartialStoryProps = Omit<
  PageHeaderPartialProps,
  "imageDesktop" | "imageMobile"
> & {
  imageDesktop: Array<string>;
  imageMobile: Array<string>;
};

const Template: StoryFn<PageHeaderPartialStoryProps> = ({
  imageDesktop,
  imageMobile,
  ...args
}: PageHeaderPartialStoryProps) => (
  <PageHeaderPartialComponent
    imageDesktop={imageDesktop[0]}
    imageMobile={imageMobile[0]}
    {...args}
  />
);

export const PageHeaderPartial = {
  render: Template,
};
