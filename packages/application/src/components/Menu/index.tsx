import { Logo, MenuButton } from "@bashkim-com/design-system";
import Link from "next/link";
import { ReactNode } from "react";

import { MenuButtonSettings } from "%components/MenuButtonSettings";

import * as S from "./styles";

export type MenuProps = {
  backButton?: ReactNode;
};

export const Menu = ({ backButton }: MenuProps) => (
  <S.Menu>
    <S.MobileOnly>{backButton ?? <MenuButton />}</S.MobileOnly>

    <Link href="/" passHref>
      <S.Title>
        <Logo />
      </S.Title>
    </Link>

    <S.MobileOnly>
      <MenuButtonSettings />
    </S.MobileOnly>
  </S.Menu>
);
