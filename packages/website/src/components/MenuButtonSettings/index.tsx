import { MenuButton } from "@bashkim-com/design-system";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
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
      <MenuButton onClick={handleSignifierClick}>
        <SettingsOutlinedIcon
          sx={{ width: 20, height: 20 }}
          className={styles["Icon"]}
        />
      </MenuButton>
      <SiteSettings isVisible={isVisible} onClose={handleClose} />
    </div>
  );
};
