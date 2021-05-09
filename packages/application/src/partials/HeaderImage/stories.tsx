import { PartialHeaderImage, PartialHeaderImageProps } from ".";

export default {
  component: PartialHeaderImage,
  title: "Partials/Header Image",
  argTypes: {
    imageDesktop: { control: "file" },
    imageMobile: { control: "file" },
    id: { defaultValue: "PartialHeaderImage" },
  },
};

type PartialHeaderImageStoryProps = PartialHeaderImageProps & {
  imageDesktop: Array<string>;
  imageMobile: Array<string>;
};

const Template = ({
  imageDesktop,
  imageMobile,
  ...args
}: PartialHeaderImageStoryProps): JSX.Element => (
  <PartialHeaderImage
    {...args}
    imageDesktop={imageDesktop[0]}
    imageMobile={imageMobile[0]}
  />
);

export const Render = Template.bind({});
Render.args = {
  imageDesktop: ["https://via.placeholder.com/1920x400?text=imageDesktop"],
  imageMobile: ["https://via.placeholder.com/1000x8000?text=imageMobile"],
};
