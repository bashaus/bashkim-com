import { MenuButton } from "@bashkim-com/design-system";
import { GearIcon } from "@primer/octicons-react";
import { ComponentPropsWithoutRef, useCallback, useState } from "react";

import { SiteSettings } from "../SiteSettings/SiteSettings";
import styles from "./MenuButtonSettings.module.scss";

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
        <GearIcon size="small" className={styles["Icon"]} />
      </MenuButton>
      <SiteSettings isVisible={isVisible} onClose={handleClose} />
    </div>
  );
};
