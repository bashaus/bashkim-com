import CloseIcon from "@mui/icons-material/Close";
import Box from "@mui/material/Box";
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
    <Drawer open={open} onClose={handleClose} onTransitionExited={handleExited}>
      <Box flex="1" overflow="scroll">
        <Box sx={{ width: 350, maxWidth: "100vw" }}>{children}</Box>
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
