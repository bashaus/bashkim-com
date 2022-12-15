import { MenuButton } from "@bashkim-com/design-system";
import { useCallback, useState } from "react";

import { SiteSettings } from "../SiteSettings/SiteSettings";
import * as S from "./MenuButtonSettings.styles";

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
        <S.Icon />
      </MenuButton>
      <SiteSettings isVisible={isVisible} onClose={handleClose} />
    </>
  );
};
