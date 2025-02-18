import Typography from "@mui/material/Typography";
import type { Meta, StoryFn } from "@storybook/react";
import { placeholderImage } from "placeholder-image-data-url-svg";

import TitlePartialComponent, { TitlePartialProps } from ".";

export default {
  component: TitlePartialComponent,
  title: "Partials/Title Partial",
  args: {
    image: [placeholderImage({ width: 300, height: 300, text: "image" })],
    title: "TitlePartial",
    subtitle: "Nulla venenatis lobortis dignissim. Nullam sit amet nisi.",
  },
  argTypes: {
    image: { control: "file" },
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

type TitlePartialStoryProps = Readonly<
  Omit<TitlePartialProps, "image"> & {
    image: Array<string>;
    title: string;
    subtitle: string;
  }
>;

const Template: StoryFn<TitlePartialStoryProps> = ({
  image,
  title,
  subtitle,
  ...args
}: TitlePartialStoryProps) => (
  <TitlePartialComponent image={image[0]} {...args}>
    <Typography variant="h2" component="h1" gutterBottom>
      {title}
    </Typography>

    <Typography>{subtitle}</Typography>
  </TitlePartialComponent>
);

export const TitlePartial = {
  render: Template,
};
