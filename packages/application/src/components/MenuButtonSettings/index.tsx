import { MenuButton } from "@bashkim-com/design-system";
import { useCallback, useState } from "react";

import { SiteSettings } from "%components/SiteSettings";

import * as S from "./styles";

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
