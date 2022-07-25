import { ComponentPropsWithoutRef } from "react";

import * as S from "./styles";

export type MenuButtonProps = ComponentPropsWithoutRef<"button">;

export const MenuButton = ({
  type = "button",
  onClick,
  ...props
}: MenuButtonProps) => (
  <S.MenuButton
    type={type}
    data-props-onclick={!!onClick}
    onClick={onClick}
    {...props}
  />
);
