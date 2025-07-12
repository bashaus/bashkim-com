import { faker } from "@faker-js/faker";
import type { Meta, StoryFn } from "@storybook/nextjs";
import { placeholderImage } from "placeholder-image-data-url-svg";

import DeviceSmartphone, { DeviceSmartphoneProps } from ".";

export default {
  component: DeviceSmartphone,
  title: "Components/Device Smartphone",
  args: {
    figure: [placeholderImage({ width: 640, height: 1130, text: "figure" })],
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

type DeviceSmartphoneStoryProps = Readonly<
  Omit<DeviceSmartphoneProps, "figure"> & {
    figure: Array<string>;
  }
>;

const Template: StoryFn<DeviceSmartphoneStoryProps> = ({
  children,
  figure,
  ...args
}: DeviceSmartphoneStoryProps) => (
  <DeviceSmartphone figure={<img src={figure[0]} alt="" />} {...args}>
    <p>{children}</p>
  </DeviceSmartphone>
);

export const Fixture = {
  render: Template,
};
