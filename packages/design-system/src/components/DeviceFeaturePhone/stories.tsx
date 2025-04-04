import type { Meta, StoryFn } from "@storybook/react";
import { placeholderImage } from "placeholder-image-data-url-svg";

import DeviceFeaturePhone, { DeviceFeaturePhoneProps } from ".";

export default {
  component: DeviceFeaturePhone,
  title: "Components/Device Feature Phone",
  args: {
    children: "Aenean malesuada ante id facilisis sollicitudin. Sed cursus.",
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
    <p>{children}</p>
  </DeviceFeaturePhone>
);

export const Fixture = {
  render: Template,
};
