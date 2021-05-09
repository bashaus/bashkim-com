import { SentryBoundary } from ".";

export default {
  component: SentryBoundary,
  title: "Components/SentryBoundary",
  parameters: {
    layout: "centered",
  },
};

const ThrowErrorComponent = () => {
  throw new Error("Error");
};

const Template = (...args) => (
  <SentryBoundary {...args}>
    <ThrowErrorComponent />
  </SentryBoundary>
);

export const Render = Template.bind({});
Render.args = {};
