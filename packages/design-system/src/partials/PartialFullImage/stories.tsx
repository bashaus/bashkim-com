import { PartialFullImage, PartialFullImageProps } from ".";

export default {
  component: PartialFullImage,
  title: "Partials/Full Image",
  argTypes: {
    figure: { control: "file" },
  },
};

type PartialFullImageStoryProps = PartialFullImageProps & {
  figure: Array<string>;
};

const Template = ({ figure, ...args }: PartialFullImageStoryProps) => (
  <PartialFullImage {...args}>
    <img alt="" src={figure[0]} />
  </PartialFullImage>
);

export const Render = Template.bind({});
Render.args = {
  figure: ["https://via.placeholder.com/1200x630?text=figure"],
};
