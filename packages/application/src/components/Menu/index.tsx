import { Logo } from "@bashkim-com/design-system";
import Link from "next/link";
import { ReactNode } from "react";

import { MenuButton } from "%components/MenuButton";

import * as S from "./styles";

export type MenuProps = {
  backButton?: ReactNode;
};

export const Menu = ({ backButton }: MenuProps) => (
  <S.Menu>
    {backButton ?? <MenuButton />}

    <Link href="/" passHref>
      <S.Title>
        <Logo />
      </S.Title>
    </Link>

    <MenuButton />
  </S.Menu>
);
