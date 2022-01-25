import { Meta, Story } from "@storybook/react";

import {
  HeaderImagePartial as HeaderImagePartialComponent,
  HeaderImagePartialProps,
} from ".";

export default {
  component: HeaderImagePartialComponent,
  title: "Partials/Header Image Partial",
  args: {
    id: "HeaderImagePartial",
    imageDesktop: ["https://via.placeholder.com/1920x400?text=imageDesktop"],
    imageMobile: ["https://via.placeholder.com/1000x8000?text=imageMobile"],
  },
  argTypes: {
    imageDesktop: { control: "file" },
    imageMobile: { control: "file" },
  },
} as Meta;

type HeaderImagePartialStoryProps = Omit<
  HeaderImagePartialProps,
  "imageDesktop" | "imageMobile"
> & {
  imageDesktop: Array<string>;
  imageMobile: Array<string>;
};

const Template: Story<HeaderImagePartialStoryProps> = ({
  imageDesktop,
  imageMobile,
  ...args
}: HeaderImagePartialStoryProps) => (
  <HeaderImagePartialComponent
    imageDesktop={imageDesktop[0]}
    imageMobile={imageMobile[0]}
    {...args}
  />
);

export const HeaderImagePartial = Template.bind({});
