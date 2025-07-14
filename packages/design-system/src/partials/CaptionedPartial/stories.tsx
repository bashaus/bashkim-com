import { faker } from "@faker-js/faker";
import Typography from "@mui/material/Typography";
import type { Meta, StoryObj } from "@storybook/nextjs";
import { placeholderImage } from "placeholder-image-data-url-svg";

import CaptionedPartial, { CaptionedPartialProps } from ".";

type CaptionedPartialRendererProps = Readonly<
  Omit<CaptionedPartialProps, "figure"> & {
    figure: Array<string>;
    title: string;
    subtitle: string;
  }
>;

const CaptionedPartialRenderer = ({
  title,
  subtitle,
  figure,
  ...args
}: CaptionedPartialRendererProps) => (
  <CaptionedPartial figure={<img src={figure[0]} alt="" />} {...args}>
    <Typography variant="h4">{title}</Typography>
    <Typography>{subtitle}</Typography>
  </CaptionedPartial>
);

const meta = {
  component: CaptionedPartial,
  title: "Partials/Captioned Partial",
  argTypes: {
    figure: { control: "file" },
    title: {
      control: "text",
      description: "Example of a title (within children)",
      table: { category: "Story helpers" },
    },
    subtitle: {
      control: "text",
      description: "Example of a subtitle (within children)",
      table: { category: "Story helpers" },
    },
  },
  render: CaptionedPartialRenderer,
} satisfies Meta<CaptionedPartialRendererProps>;

type Story = StoryObj<typeof meta>;

export const Fixture = {
  args: {
    figure: [placeholderImage({ width: 1200, height: 630, text: "figure" })],
    title: faker.lorem.words(3),
    subtitle: faker.lorem.sentence(12),
  },
} satisfies Story;

export default meta;
