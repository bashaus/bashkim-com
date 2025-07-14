import { faker } from "@faker-js/faker";
import Typography from "@mui/material/Typography";
import type { Meta, StoryObj } from "@storybook/nextjs";
import { placeholderImage } from "placeholder-image-data-url-svg";

import DeviceFeaturePhone, { DeviceFeaturePhoneProps } from ".";

type DeviceFeaturePhoneRendererProps = Readonly<
  Omit<DeviceFeaturePhoneProps, "figure"> & {
    figure: Array<string>;
  }
>;

const DeviceFeaturePhoneRenderer = ({
  children,
  figure,
  ...args
}: DeviceFeaturePhoneRendererProps) => (
  <DeviceFeaturePhone figure={<img src={figure[0]} alt="" />} {...args}>
    <Typography>{children}</Typography>
  </DeviceFeaturePhone>
);

const meta = {
  component: DeviceFeaturePhone,
  title: "Components/Device Feature Phone",
  argTypes: {
    figure: { control: "file" },
  },
  parameters: {
    layout: "centered",
  },
  render: DeviceFeaturePhoneRenderer,
} satisfies Meta<DeviceFeaturePhoneRendererProps>;

type Story = StoryObj<typeof meta>;

export const Fixture = {
  args: {
    children: faker.lorem.sentence(6),
    figure: [placeholderImage({ width: 496, height: 390, text: "figure" })],
  },
} satisfies Story;

export default meta;
