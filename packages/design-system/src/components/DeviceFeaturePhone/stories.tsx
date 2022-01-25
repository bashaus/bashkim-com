import { Meta, Story } from "@storybook/react";
import faker from "faker";

import { DeviceFeaturePhone, DeviceFeaturePhoneProps } from ".";

export default {
  component: DeviceFeaturePhone,
  title: "Components/Device/Feature Phone",
  args: {
    children: faker.lorem.sentence(8),
    figure: ["https://via.placeholder.com/496x390?text=figure"],
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

const Template: Story<DeviceFeaturePhoneStoryProps> = ({
  children,
  figure,
  ...args
}: DeviceFeaturePhoneStoryProps) => (
  <DeviceFeaturePhone figure={<img src={figure[0]} alt="" />} {...args}>
    <p>{children}</p>
  </DeviceFeaturePhone>
);

export const FeaturePhone = Template.bind({});
