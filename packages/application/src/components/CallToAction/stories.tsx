import { CallToAction, CallToActionProps } from ".";

export default {
  component: CallToAction,
  title: "Components/CallToAction",
  argTypes: {
    content: { control: "text" },
  },
  parameters: {
    layout: "centered",
  },
};

type CallToActionStoryProps = CallToActionProps & {
  content: string;
};

const Template = ({ content, ...args }: CallToActionStoryProps) => (
  <CallToAction {...args}>
    <a>
      <span>{content}</span>
    </a>
  </CallToAction>
);

export const Render = Template.bind({});
Render.args = {
  content: "CallToAction",
};
