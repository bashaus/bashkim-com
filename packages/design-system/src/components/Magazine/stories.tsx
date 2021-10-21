import { Magazine, MagazineProps } from ".";

export default {
  component: Magazine,
  title: "Components/Magazine",
  argTypes: {
    spread: { min: 1, max: 3 },
  },
  parameters: {
    layout: "centered",
  },
};

const Template = ({ ...args }: MagazineProps) => (
  <div style={{ maxWidth: 600, width: "100vw" }}>
    <Magazine {...args}>
      {Array(args.pages)
        .fill("")
        .map((_value, index) => (
          <div key={index}>
            <img
              src={`https://via.placeholder.com/${args.pageWidth}x${
                args.pageHeight
              }?text=Page+${index + 1}`}
              alt={`Page ${index + 1}`}
              width={args.pageWidth}
              height={args.pageHeight}
            />
          </div>
        ))}
    </Magazine>
  </div>
);

export const Render = Template.bind({});
Render.args = {
  pageWidth: 350,
  pageHeight: 450,
  spread: 1,
  pages: 6,
};
