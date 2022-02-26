import { ReactNode } from "react";

import { Menu } from "%components/Menu";
import { Navigation } from "%components/Navigation";
import { useNavigation } from "%contexts/Navigation/context";

import * as S from "./styles";

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
      </S.Container>
    </S.Header>
  );
};
