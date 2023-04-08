import type { Meta, StoryFn } from "@storybook/react";

import {
  DeviceFeaturePhone,
  DeviceFeaturePhoneProps,
} from "./DeviceFeaturePhone";

export default {
  component: DeviceFeaturePhone,
  title: "Components/Device/Feature Phone",
  args: {
    children: "Aenean malesuada ante id facilisis sollicitudin. Sed cursus.",
    figure: ["https://via.placeholder.com/496x390.png?text=figure"],
  },
  argTypes: {
    figure: { control: "file" },
    children: { control: "text" },
  },
  parameters: {
    layout: "centered",
  },
} as Meta;

type DeviceFeaturePhoneStoryProps = Omit<DeviceFeaturePhoneProps, "figure"> & {
  figure: Array<string>;
};

const Template: StoryFn<DeviceFeaturePhoneStoryProps> = ({
  children,
  figure,
  ...args
}: DeviceFeaturePhoneStoryProps) => (
  <DeviceFeaturePhone figure={<img src={figure[0]} alt="" />} {...args}>
    <p>{children}</p>
  </DeviceFeaturePhone>
);

export const FeaturePhone = {
  render: Template,
};
