import { Turn, TurnProps, TurnDisplay } from ".";

export default {
  component: Turn,
  title: "Components/Turn",
  argTypes: {
    display: { defaultValue: TurnDisplay.DOUBLE },
    center: { control: "boolean" },
    onInitialize: { action: "onInitialize" },
    onPageChange: { action: "onPageChange" },
  },
  parameters: {
    layout: "centered",
  },
};

const Template = ({ ...args }: TurnProps): JSX.Element => (
  <div style={{ maxWidth: 800, width: "100vw" }}>
    <Turn {...args} pageWidth={300} pageHeight={450}>
      {Array(args.pages)
        .fill("")
        .map((_value, index) => (
          <div key={index}>
            <img
              src={`https://via.placeholder.com/300x450?text=Page+${index + 1}`}
              alt={`Page ${index + 1}`}
            />
          </div>
        ))}
    </Turn>
  </div>
);

export const Render = Template.bind({});
Render.args = {
  pages: 6,
};
