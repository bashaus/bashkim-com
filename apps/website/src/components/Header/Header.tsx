import { ReactNode } from "react";

import { useNavigation } from "../../contexts/Navigation/Navigation.context";
import { Menu } from "../Menu/Menu";
import { MenuButtonSettings } from "../MenuButtonSettings/MenuButtonSettings";
import { Navigation } from "../Navigation/Navigation";
import * as S from "./Header.styles";

export type HeaderProps = {
  backButton?: ReactNode;
};

export const Header = ({ backButton }: HeaderProps) => {
  const { navigationState } = useNavigation();

  return (
    <S.Header
      data-context-navigation-scroll-at-top={navigationState.scrollAtTop}
    >
      <S.Container>
        <Menu backButton={backButton} />
        <Navigation />
        <S.MobileHidden>
          <MenuButtonSettings />
        </S.MobileHidden>
      </S.Container>
    </S.Header>
  );
};
