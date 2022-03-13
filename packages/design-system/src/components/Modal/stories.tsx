import type { Meta, Story } from "@storybook/react";

import { Modal as ModalComponent, ModalProps } from ".";

export default {
  component: ModalComponent,
  title: "Components/Modal",
  args: {
    children: <div style={{ padding: "15px 20px" }}>Modal</div>,
    isOpen: true,
  },
  argTypes: {
    onAfterOpen: { action: "onAfterOpen" },
    onAfterClose: { action: "onAfterClose" },
    onRequestClose: { action: "onRequestClose" },
  },
} as Meta;

const Template: Story<ModalProps> = (args: ModalProps) => (
  <ModalComponent {...args} />
);

export const Modal = Template.bind({});
