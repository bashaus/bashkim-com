import type { Meta, StoryFn } from "@storybook/react";

import { ModalFrame } from "../ModalFrame/ModalFrame";
import { Modal as ModalComponent, ModalProps } from "./Modal";

export default {
  component: ModalComponent,
  title: "Components/Modal",
  args: {
    isOpen: true,
  },
  argTypes: {
    onAfterOpen: { action: "onAfterOpen" },
    onAfterClose: { action: "onAfterClose" },
    onRequestClose: { action: "onRequestClose" },
  },
} as Meta;

const Template: StoryFn<ModalProps> = (args: ModalProps) => (
  <ModalComponent {...args}>
    <ModalFrame style={{ width: "80vw", height: "60vh" }} />
  </ModalComponent>
);

export const Modal = {
  render: Template,
};
