import { ComponentPropsWithRef } from "react";

import * as S from "./styles";

export type NavigationItemProps = ComponentPropsWithRef<"li"> & {
  isSelected?: boolean;
};

export const NavigationItem = ({
  isSelected = false,
  ...props
}: NavigationItemProps) => (
  <S.NavigationItem
    aria-current={isSelected ? "location" : undefined}
    {...props}
  />
);
