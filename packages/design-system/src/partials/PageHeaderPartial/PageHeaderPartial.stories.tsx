import type { Meta, StoryFn } from "@storybook/react";

import {
  PageHeaderPartial as PageHeaderPartialComponent,
  PageHeaderPartialProps,
} from "./PageHeaderPartial";

export default {
  component: PageHeaderPartialComponent,
  title: "Partials/Page Header Partial",
  args: {
    id: "PageHeaderPartial",
    imageDesktop: [
      "https://via.placeholder.com/1920x400.png?text=imageDesktop",
    ],
    imageMobile: ["https://via.placeholder.com/1000x8000.png?text=imageMobile"],
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
