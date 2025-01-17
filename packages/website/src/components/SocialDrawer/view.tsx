import CloseIcon from "@mui/icons-material/Close";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import DialogActions from "@mui/material/DialogActions";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import { PropsWithChildren } from "react";

import { useSocialDrawerViewModal } from "./view-model";

export type SocialDrawerViewProps = Readonly<
  PropsWithChildren<{
    viewModel: ReturnType<typeof useSocialDrawerViewModal>;
  }>
>;

export default function SocialDrawerView({
  children,
  viewModel,
}: SocialDrawerViewProps) {
  const { open, handleClose, handleExited } = viewModel;
  return (
    <Drawer
      open={open}
      onClose={handleClose}
      onTransitionExited={handleExited}
      anchor="right"
    >
      <Box flex="1" overflow="scroll">
        <Box sx={{ width: 350, maxWidth: "100%" }}>{children}</Box>
      </Box>

      <Divider />
      <DialogActions>
        <Button startIcon={<CloseIcon />} onClick={handleClose}>
          Close
        </Button>
      </DialogActions>
    </Drawer>
  );
}
