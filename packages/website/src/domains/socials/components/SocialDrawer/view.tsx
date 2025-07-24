import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";
import DialogActions from "@mui/material/DialogActions";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import { PropsWithChildren } from "react";

import { useSocialDrawerViewModel } from "./view-model";

export type SocialDrawerViewProps = Readonly<
  PropsWithChildren<{
    viewModel: ReturnType<typeof useSocialDrawerViewModel>;
  }>
>;

export default function SocialDrawerView({
  children,
  viewModel,
}: SocialDrawerViewProps) {
  const { open, handleClose, handleExited } = viewModel;
  return (
    <Drawer
      variant="temporary"
      open={open}
      onClose={handleClose}
      onTransitionExited={handleExited}
      slotProps={{
        paper: {
          sx: {
            width: 350,
            maxWidth: "100vw",
          },
        },
      }}
    >
      {children}

      <Divider />
      <DialogActions>
        <Button startIcon={<CloseIcon />} onClick={handleClose}>
          Close
        </Button>
      </DialogActions>
    </Drawer>
  );
}
