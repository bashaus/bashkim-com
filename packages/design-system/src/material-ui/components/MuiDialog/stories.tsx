import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import type { Meta, StoryObj } from "@storybook/nextjs";

const meta = {
  component: Dialog,
  title: "Material UI/MUI Dialog",
  args: {
    open: true,
    maxWidth: "sm",
    children: (
      <>
        <DialogTitle>MUI: Dialog</DialogTitle>
        <DialogContent>
          The MUI &lt;Dialog /&gt; component has some default properties to make
          it appear in a standardized form.
        </DialogContent>
      </>
    ),
  },
} satisfies Meta<typeof Dialog>;

type Story = StoryObj<typeof meta>;

export const Fixture = {} satisfies Story;

export default meta;
