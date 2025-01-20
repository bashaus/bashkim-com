import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { ComponentPropsWithoutRef, useCallback, useState } from "react";

import SiteSettings from "../SiteSettings";
import styles from "./styles.module.scss";

export type MenuButtonSettingsProps = Readonly<ComponentPropsWithoutRef<"div">>;

export default function MenuButtonSettings(props: MenuButtonSettingsProps) {
  const [open, setOpen] = useState<boolean>(false);

  const handleSignifierClick = useCallback(() => {
    setOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <div {...props}>
      <Tooltip title="Site settings" arrow>
        <IconButton color="inherit" onClick={handleSignifierClick}>
          <SettingsOutlinedIcon className={styles["Icon"]} color="inherit" />
        </IconButton>
      </Tooltip>

      <SiteSettings open={open} onClose={handleClose} />
    </div>
  );
}
