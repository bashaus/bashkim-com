import { faker } from "@faker-js/faker";
import Typography from "@mui/material/Typography";
import type { Meta, StoryObj } from "@storybook/nextjs";
import { placeholderImage } from "placeholder-image-data-url-svg";

import DeviceSmartphone, { DeviceSmartphoneProps } from ".";

type DeviceSmartphoneRendererProps = Readonly<
  Omit<DeviceSmartphoneProps, "figure"> & {
    figure: Array<string>;
  }
>;

const DeviceSmartphoneRenderer = ({
  children,
  figure,
  ...args
}: DeviceSmartphoneRendererProps) => (
  <DeviceSmartphone figure={<img src={figure[0]} alt="" />} {...args}>
    <Typography>{children}</Typography>
  </DeviceSmartphone>
);

const meta = {
  component: DeviceSmartphone,
  title: "Components/Device Smartphone",
  argTypes: {
    figure: { control: "file" },
    children: { control: "text" },
  },
  parameters: {
    layout: "centered",
  },
  render: DeviceSmartphoneRenderer,
} satisfies Meta<typeof DeviceSmartphoneRenderer>;

type Story = StoryObj<typeof meta>;

export const Fixture = {
  args: {
    figure: [placeholderImage({ width: 640, height: 1130, text: "figure" })],
    children: faker.lorem.sentence(8),
  },
} satisfies Story;

export default meta;
