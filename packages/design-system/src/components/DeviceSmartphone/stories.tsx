import faker from "faker";

import { DeviceSmartphone, DeviceSmartphoneProps } from ".";

export default {
  component: DeviceSmartphone,
  title: "Components/Device/Smartphone",
  argTypes: {
    figure: { control: "file" },
    children: { control: "text" },
  },
  parameters: {
    layout: "centered",
  },
};

type DeviceSmartphoneStoryProps = DeviceSmartphoneProps & {
  figure: Array<string>;
  children: string;
};

const Template = ({
  children,
  figure,
  ...args
}: DeviceSmartphoneStoryProps) => (
  <DeviceSmartphone figure={<img src={figure[0]} alt="" />} {...args}>
    <p>{children}</p>
  </DeviceSmartphone>
);

export const Smartphone = Template.bind({});
Smartphone.args = {
  figure: ["https://via.placeholder.com/640x1130?text=figure"],
  children: faker.lorem.sentence(8),
};
