import faker from "faker";

import { DeviceFeaturePhone, DeviceFeaturePhoneProps } from ".";

export default {
  component: DeviceFeaturePhone,
  title: "Components/DeviceFeaturePhone",
  argTypes: {
    figure: { control: "file" },
    caption: { control: "text" },
  },
  parameters: {
    layout: "centered",
  },
};

type DeviceFeaturePhoneStoryProps = DeviceFeaturePhoneProps & {
  figure: Array<string>;
  caption: string;
};

const Template = ({
  caption,
  figure,
  ...args
}: DeviceFeaturePhoneStoryProps) => (
  <DeviceFeaturePhone figure={<img src={figure[0]} alt="" />} {...args}>
    <p>{caption}</p>
  </DeviceFeaturePhone>
);

export const Render = Template.bind({});
Render.args = {
  figure: ["https://via.placeholder.com/496x390?text=figure"],
  caption: faker.lorem.sentence(8),
};
