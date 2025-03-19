import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { useCallback, useState } from "react";

import SiteSettings from "@/domains/site-settings/components/SiteSettings";

export default function HeaderActionSiteSettings() {
  const [open, setOpen] = useState<boolean>(false);

  const handleSignifierClick = useCallback(() => {
    setOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <>
      <Tooltip title="Site settings" arrow>
        <IconButton color="inherit" onClick={handleSignifierClick}>
          <SettingsOutlinedIcon color="inherit" />
        </IconButton>
      </Tooltip>

      <SiteSettings open={open} onClose={handleClose} />
    </>
  );
}
