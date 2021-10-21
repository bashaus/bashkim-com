import { SplitPartial, SplitPartialProps } from ".";
import { SplitItemPartial } from "../SplitItemPartial";

export default {
  component: SplitPartial,
  title: "Partials/SplitPartial",
  argTypes: {
    backgroundImage: {
      control: "file",
      table: { category: "Story helpers" },
    },
  },
};

type SplitPartialStoryProps = SplitPartialProps & {
  backgroundImage: Array<string>;
};

const Template = ({
  backgroundImage,
  index = 0,
  ...args
}: SplitPartialStoryProps) => (
  <>
    <SplitPartial index={index} {...args}>
      <SplitItemPartial>
        <div>SplitPartial</div>
      </SplitItemPartial>
      <SplitItemPartial backgroundImage={backgroundImage[0]} />
    </SplitPartial>

    <SplitPartial index={index + 1} {...args}>
      <SplitItemPartial>
        <div>SplitPartial (alternate)</div>
      </SplitItemPartial>
      <SplitItemPartial backgroundImage={backgroundImage[0]} />
    </SplitPartial>
  </>
);

export const Render = Template.bind({});
Render.args = {
  backgroundImage: [
    "https://via.placeholder.com/992x558?text=Background+image",
  ],
};
