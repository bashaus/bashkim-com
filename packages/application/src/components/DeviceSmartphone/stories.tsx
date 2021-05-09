import faker from "faker";

import { DeviceSmartphone, DeviceSmartphoneProps } from ".";

export default {
  component: DeviceSmartphone,
  title: "Components/DeviceSmartphone",
  argTypes: {
    figure: { control: "file" },
    caption: { control: "text" },
  },
  parameters: {
    layout: "centered",
  },
};

type DeviceSmartphoneStoryProps = DeviceSmartphoneProps & {
  figure: Array<string>;
  caption: string;
};

const Template = ({ caption, figure, ...args }: DeviceSmartphoneStoryProps) => (
  <DeviceSmartphone figure={<img src={figure[0]} alt="" />} {...args}>
    <p>{caption}</p>
  </DeviceSmartphone>
);

export const Render = Template.bind({});
Render.args = {
  figure: ["https://via.placeholder.com/640x1130?text=figure"],
  caption: faker.lorem.sentence(8),
};
