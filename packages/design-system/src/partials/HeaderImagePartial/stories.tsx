import { HeaderImagePartial, HeaderImagePartialProps } from ".";

export default {
  component: HeaderImagePartial,
  title: "Partials/HeaderImagePartial",
  argTypes: {
    imageDesktop: { control: "file" },
    imageMobile: { control: "file" },
  },
};

type HeaderImagePartialStoryProps = HeaderImagePartialProps & {
  imageDesktop: Array<string>;
  imageMobile: Array<string>;
};

const Template = ({
  imageDesktop,
  imageMobile,
  ...args
}: HeaderImagePartialStoryProps): JSX.Element => (
  <HeaderImagePartial
    {...args}
    imageDesktop={imageDesktop[0]}
    imageMobile={imageMobile[0]}
  />
);

export const Render = Template.bind({});
Render.args = {
  id: "HeaderImagePartial",
  imageDesktop: ["https://via.placeholder.com/1920x400?text=imageDesktop"],
  imageMobile: ["https://via.placeholder.com/1000x8000?text=imageMobile"],
};
