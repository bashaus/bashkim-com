import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { IconButton, Tooltip } from "@mui/material";
import { ComponentPropsWithoutRef, useCallback, useState } from "react";

import { SiteSettings } from "../SiteSettings";
import styles from "./styles.module.scss";

export type MenuButtonSettingsProps = ComponentPropsWithoutRef<"div">;

export const MenuButtonSettings = (props: MenuButtonSettingsProps) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const handleSignifierClick = useCallback(() => {
    setIsVisible(true);
  }, []);

  const handleClose = useCallback(() => {
    setIsVisible(false);
  }, []);

  return (
    <div {...props}>
      <Tooltip title="Site settings" arrow>
        <IconButton color="inherit" onClick={handleSignifierClick}>
          <SettingsOutlinedIcon className={styles["Icon"]} color="inherit" />
        </IconButton>
      </Tooltip>

      <SiteSettings isVisible={isVisible} onClose={handleClose} />
    </div>
  );
};
