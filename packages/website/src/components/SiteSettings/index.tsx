import CloseIcon from "@mui/icons-material/Close";
import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { ComponentPropsWithoutRef } from "react";

import SiteSettingsAppearance from "../SiteSettingsAppearance";
import SiteSettingsGridLines from "../SiteSettingsGridLines";

export type SiteSettingsProps = Readonly<{
  isVisible: boolean;
  onClose: ComponentPropsWithoutRef<"button">["onClick"];
}>;

export default function SiteSettings({
  isVisible,
  onClose,
}: SiteSettingsProps) {
  return (
    <Dialog open={isVisible} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>Site settings</DialogTitle>

      <DialogContent dividers sx={{ px: 1, py: 0 }}>
        <List>
          <ListItem>
            <ListItemText primary="Appearance" />
            <ListItemIcon>
              <SiteSettingsAppearance />
            </ListItemIcon>
          </ListItem>

          <ListItem>
            <ListItemText primary="Grid lines" />
            <ListItemIcon>
              <SiteSettingsGridLines />
            </ListItemIcon>
          </ListItem>
        </List>
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
