import { CookiesNotice, CookiesNoticeProps } from ".";

export default {
  component: CookiesNotice,
  title: "Components/CookiesNotice",
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
};

const Template = ({ ...args }: CookiesNoticeProps) => (
  <CookiesNotice {...args} />
);

export const Render = Template.bind({});
Render.args = {};
