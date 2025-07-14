import { faker } from "@faker-js/faker";
import Typography from "@mui/material/Typography";
import type { Meta, StoryFn } from "@storybook/nextjs";
import { placeholderImage } from "placeholder-image-data-url-svg";

import DeviceFeaturePhone, { DeviceFeaturePhoneProps } from ".";

export default {
  component: DeviceFeaturePhone,
  title: "Components/Device Feature Phone",
  args: {
    children: faker.lorem.sentence(6),
    figure: [placeholderImage({ width: 496, height: 390, text: "figure" })],
  },
  argTypes: {
    figure: { control: "file" },
    children: { control: "text" },
  },
  parameters: {
    layout: "centered",
  },
} as Meta;

type DeviceFeaturePhoneStoryProps = Readonly<
  Omit<DeviceFeaturePhoneProps, "figure"> & {
    figure: Array<string>;
  }
>;

const Template: StoryFn<DeviceFeaturePhoneStoryProps> = ({
  children,
  figure,
  ...args
}: DeviceFeaturePhoneStoryProps) => (
  <DeviceFeaturePhone figure={<img src={figure[0]} alt="" />} {...args}>
    <Typography>{children}</Typography>
  </DeviceFeaturePhone>
);

export const Fixture = {
  render: Template,
};
