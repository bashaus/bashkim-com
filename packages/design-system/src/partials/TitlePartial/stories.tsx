import { faker } from "@faker-js/faker";
import type { Meta, StoryObj } from "@storybook/nextjs";
import { placeholderImage } from "placeholder-image-data-url-svg";

import TitlePartial, { TitlePartialProps } from ".";

type TitlePartialRendererProps = Readonly<
  Omit<TitlePartialProps, "image"> & {
    image: Array<string>;
  }
>;

const TitlePartialRenderer = ({
  image,
  ...args
}: TitlePartialRendererProps) => (
  <TitlePartial image={<img alt="" src={image[0]} />} {...args} />
);

const meta = {
  component: TitlePartial,
  title: "Partials/Title Partial",
  argTypes: {
    image: { control: "file" },
  },
  render: TitlePartialRenderer,
} satisfies Meta<TitlePartialRendererProps>;

type Story = StoryObj<typeof meta>;

export const Fixture = {
  args: {
    image: [placeholderImage({ width: 300, height: 300, text: "image" })],
    title: faker.lorem.words(3),
    description: faker.lorem.sentence(9),
  },
} satisfies Story;

export default meta;
