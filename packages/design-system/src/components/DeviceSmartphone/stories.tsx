import { Meta, Story } from "@storybook/react";
import faker from "faker";

import { DeviceSmartphone, DeviceSmartphoneProps } from ".";

export default {
  component: DeviceSmartphone,
  title: "Components/Device/Smartphone",
  args: {
    figure: ["https://via.placeholder.com/640x1130?text=figure"],
    children: faker.lorem.sentence(8),
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
  children: React.ReactNode;
};

const Template: Story<DeviceSmartphoneStoryProps> = ({
  children,
  figure,
  ...args
}: DeviceSmartphoneStoryProps) => (
  <DeviceSmartphone figure={<img src={figure[0]} alt="" />} {...args}>
    <p>{children}</p>
  </DeviceSmartphone>
);

export const Smartphone = Template.bind({});
