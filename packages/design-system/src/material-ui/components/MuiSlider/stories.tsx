import Box from "@mui/material/Box";
import Slider, { SliderProps } from "@mui/material/Slider";
import type { Meta, StoryObj } from "@storybook/nextjs";

const meta = {
  component: Slider,
  title: "Material UI/Slider",
  render: (args: SliderProps) => (
    <Box minWidth={200}>
      <Slider {...args} />
    </Box>
  ),

  args: {
    min: 0,
    max: 10,
    step: 1,
  },
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Slider>;

type Story = StoryObj<typeof meta>;

export const ColorPrimary = {
  args: {
    color: "primary",
  },
} satisfies Story;

export const ColorSecondary = {
  args: {
    color: "secondary",
  },
} satisfies Story;

export const ColorError = {
  args: {
    color: "error",
  },
} satisfies Story;

export default meta;
