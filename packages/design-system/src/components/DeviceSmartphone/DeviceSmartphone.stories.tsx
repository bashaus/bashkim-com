import type { Meta, StoryFn } from "@storybook/react";
import { ReactNode } from "react";

import { DeviceSmartphone, DeviceSmartphoneProps } from "./DeviceSmartphone";

export default {
  component: DeviceSmartphone,
  title: "Components/Device/Smartphone",
  args: {
    figure: ["https://via.placeholder.com/640x1130.png?text=figure"],
    children: "Class aptent taciti sociosqu ad litora torquent per.",
  },
  argTypes: {
    figure: { control: "file" },
    children: { control: "text" },
  },
  parameters: {
    layout: "centered",
  },
} as Meta;

type DeviceSmartphoneStoryProps = Omit<DeviceSmartphoneProps, "figure"> & {
  figure: Array<string>;
  children: ReactNode;
};

const Template: StoryFn<DeviceSmartphoneStoryProps> = ({
  children,
  figure,
  ...args
}: DeviceSmartphoneStoryProps) => (
  <DeviceSmartphone figure={<img src={figure[0]} alt="" />} {...args}>
    <p>{children}</p>
  </DeviceSmartphone>
);

export const Smartphone = {
  render: Template,
};
