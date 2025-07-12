import Typography from "@mui/material/Typography";
import type { Meta, StoryFn } from "@storybook/nextjs";
import { placeholderImage } from "placeholder-image-data-url-svg";

import PageHeaderPartial, { PageHeaderPartialProps } from ".";

export default {
  component: PageHeaderPartial,
  title: "Partials/Page Header Partial",
  args: {
    imageDesktop: [
      placeholderImage({ width: 1920, height: 400, text: "imageDesktop" }),
    ],
    imageMobile: [
      placeholderImage({ width: 1000, height: 800, text: "imageMobile" }),
    ],
  },
  argTypes: {
    imageDesktop: { control: "file" },
    imageMobile: { control: "file" },
  },
} as Meta;

type PageHeaderPartialStoryProps = Readonly<
  Omit<PageHeaderPartialProps, "imageDesktop" | "imageMobile"> & {
    imageDesktop: Array<string>;
    imageMobile: Array<string>;
  }
>;

const Template: StoryFn<PageHeaderPartialStoryProps> = ({
  imageDesktop,
  imageMobile,
  ...args
}: PageHeaderPartialStoryProps) => (
  <PageHeaderPartial
    imageDesktop={imageDesktop[0]}
    imageMobile={imageMobile[0]}
    {...args}
  />
);

export const Fixture = {
  args: {
    children: (
      <>
        <Typography variant="h2" component="h1" gutterBottom>
          Page header partial
        </Typography>
        <Typography variant="subtitle1">Lorem ipsum dolar sit a met</Typography>
      </>
    ),
  },
  render: Template,
};
