import { faker } from "@faker-js/faker";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Drawer from "@mui/material/Drawer";
import Typography from "@mui/material/Typography";
import type { Meta, StoryObj } from "@storybook/nextjs";

const meta = {
  component: Drawer,
  title: "Material UI/MUI Drawer",
  args: {
    open: true,
    children: (
      <>
        <DialogTitle>MUI: Drawer </DialogTitle>
        <DialogContent>
          <Typography gutterBottom>{faker.lorem.paragraph()}</Typography>
        </DialogContent>
      </>
    ),
  },
  argTypes: {
    children: { table: { disable: true } },
  },
} satisfies Meta<typeof Drawer>;

type Story = StoryObj<typeof meta>;

export const Fixture = {} satisfies Story;

export default meta;
