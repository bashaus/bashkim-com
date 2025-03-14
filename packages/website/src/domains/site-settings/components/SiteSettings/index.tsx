import CloseIcon from "@mui/icons-material/Close";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { ComponentPropsWithoutRef } from "react";

import SiteSettingsAppearance from "@/domains/site-settings/components/SiteSettingsAppearance";
import SiteSettingsGridLines from "@/domains/site-settings/components/SiteSettingsGridLines";

export type SiteSettingsProps = Readonly<{
  open: boolean;
  onClose: ComponentPropsWithoutRef<"button">["onClick"];
}>;

export default function SiteSettings({ open, onClose }: SiteSettingsProps) {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth>
      <DialogTitle>Site settings</DialogTitle>

      <DialogContent>
        <Stack spacing={2}>
          <Box>
            <Typography variant="subtitle1" gutterBottom>
              Appearance
            </Typography>
            <SiteSettingsAppearance />
          </Box>

          <Box>
            <Typography variant="subtitle1" gutterBottom>
              Grid lines
            </Typography>
            <SiteSettingsGridLines />
          </Box>
        </Stack>
      </DialogContent>

      <DialogActions>
        <Button
          onClick={onClose}
          startIcon={<CloseIcon sx={{ width: 16, height: 16 }} />}
        >
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}
