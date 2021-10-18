import { FullImagePartial, FullImagePartialProps } from ".";

export default {
  component: FullImagePartial,
  title: "Partials/FullImagePartial",
  argTypes: {
    figure: { control: "file" },
  },
};

type FullImagePartialStoryProps = FullImagePartialProps & {
  figure: Array<string>;
};

const Template = ({ figure, ...args }: FullImagePartialStoryProps) => (
  <FullImagePartial {...args}>
    <img alt="" src={figure[0]} />
  </FullImagePartial>
);

export const Render = Template.bind({});
Render.args = {
  figure: ["https://via.placeholder.com/1200x630?text=figure"],
};
