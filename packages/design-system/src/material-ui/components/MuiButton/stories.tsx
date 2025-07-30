import Button from "@mui/material/Button";
import type { Meta, StoryObj } from "@storybook/nextjs";

const meta = {
  component: Button,
  title: "Material UI/Button",
  args: {
    children: "Button",
  },
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Button>;

type Story = StoryObj<typeof meta>;

export const VariantText = {
  args: {
    variant: "text",
  },
} satisfies Story;

export const VariantContained = {
  args: {
    variant: "contained",
  },
} satisfies Story;

export const VariantOutlined = {
  args: {
    variant: "outlined",
  },
} satisfies Story;

export const ColorPrimary = {
  args: {
    variant: "contained",
    color: "primary",
  },
} satisfies Story;

export const ColorSecondary = {
  args: {
    variant: "contained",
    color: "secondary",
  },
} satisfies Story;

export const ColorError = {
  args: {
    variant: "contained",
    color: "error",
  },
} satisfies Story;

export default meta;
