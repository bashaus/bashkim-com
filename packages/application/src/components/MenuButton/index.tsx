import { HTMLAttributes } from "react";

import * as S from "./styles";

export type MenuButtonProps = HTMLAttributes<HTMLAnchorElement>;

export const MenuButton = (props: MenuButtonProps): JSX.Element => (
  <S.MenuButton {...props} />
);
