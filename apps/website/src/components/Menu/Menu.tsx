import { Logo, MenuButton } from "@bashkim-com/design-system";
import Link from "next/link";
import { ReactNode } from "react";

import { MenuButtonSettings } from "../MenuButtonSettings/MenuButtonSettings";

import * as S from "./Menu.styles";

export type MenuProps = {
  backButton?: ReactNode;
};

export const Menu = ({ backButton }: MenuProps) => (
  <S.Menu>
    <S.MobileOnly>{backButton ?? <MenuButton />}</S.MobileOnly>

    <S.Title>
      <Link href="/">
        <Logo />
      </Link>
    </S.Title>

    <S.MobileOnly>
      <MenuButtonSettings />
    </S.MobileOnly>
  </S.Menu>
);
