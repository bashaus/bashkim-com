import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";
import DialogActions from "@mui/material/DialogActions";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import { PropsWithChildren } from "react";

import { useSocialsDrawerViewModel } from "./view-model";

export type SocialsDrawerViewProps = Readonly<
  PropsWithChildren<{
    viewModel: ReturnType<typeof useSocialsDrawerViewModel>;
  }>
>;

export default function SocialsDrawerView({
  children,
  viewModel,
}: SocialsDrawerViewProps) {
  const { open, handleClose, handleExited } = viewModel;
  return (
    <Drawer
      variant="temporary"
      open={open}
      onClose={handleClose}
      onTransitionExited={handleExited}
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
