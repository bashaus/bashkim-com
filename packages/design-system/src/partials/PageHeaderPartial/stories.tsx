import { faker } from "@faker-js/faker";
import Typography from "@mui/material/Typography";
import type { Meta, StoryObj } from "@storybook/nextjs";
import { placeholderImage } from "placeholder-image-data-url-svg";

import PageHeaderPartial, { PageHeaderPartialProps } from ".";

type PageHeaderPartialRendererProps = Readonly<
  Omit<PageHeaderPartialProps, "imageDesktop" | "imageMobile"> & {
    _imageDesktop: Array<string>;
    _imageMobile: Array<string>;
  }
>;

const PageHeaderPartialRenderer = ({
  _imageDesktop,
  _imageMobile,
  ...args
}: PageHeaderPartialRendererProps) => (
  <PageHeaderPartial
    imageDesktop={_imageDesktop[0]}
    imageMobile={_imageMobile[0]}
    {...args}
  />
);

const meta = {
  component: PageHeaderPartial,
  title: "Partials/Page Header Partial",
  argTypes: {
    _imageDesktop: { control: "file", name: "imageDesktop" },
    _imageMobile: { control: "file", name: "imageMobile" },
  },
  parameters: {
    layout: "fullscreen",
  },
  render: PageHeaderPartialRenderer,
} satisfies Meta<typeof PageHeaderPartialRenderer>;

type Story = StoryObj<typeof meta>;

export const Fixture = {
  args: {
    _imageDesktop: [
      placeholderImage({ width: 1920, height: 400, text: "imageDesktop" }),
    ],
    _imageMobile: [
      placeholderImage({ width: 1000, height: 800, text: "imageMobile" }),
    ],
    children: (
      <>
        <Typography variant="h2" component="h1" gutterBottom>
          {faker.lorem.words(3)}
        </Typography>
        <Typography variant="subtitle1">{faker.lorem.sentence()}</Typography>
      </>
    ),
  },
} satisfies Story;

export default meta;
