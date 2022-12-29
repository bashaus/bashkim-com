import { MenuButton } from "@bashkim-com/design-system";
import { GearIcon } from "@primer/octicons-react";
import { useCallback, useState } from "react";

import { SiteSettings } from "../SiteSettings/SiteSettings";
import styles from "./MenuButtonSettings.module.scss";

export const MenuButtonSettings = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const handleSignifierClick = useCallback(() => {
    setIsVisible(true);
  }, []);

  const handleClose = useCallback(() => {
    setIsVisible(false);
  }, []);

  return (
    <>
      <MenuButton onClick={handleSignifierClick}>
        <GearIcon size="small" className={styles["Icon"]} />
      </MenuButton>
      <SiteSettings isVisible={isVisible} onClose={handleClose} />
    </>
  );
};
