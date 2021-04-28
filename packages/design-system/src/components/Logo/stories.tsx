import { Logo } from ".";

export default {
  component: Logo,
  title: "Components/Logo",
  parameters: {
    layout: "centered",
  },
};

const Template = ({ ...args }) => <Logo {...args} />;

export const Render = Template.bind({});
Render.args = {};
