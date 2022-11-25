import { ComponentPropsWithoutRef } from "react";

import * as S from "./NavigationItem.styles";

export type NavigationItemProps = ComponentPropsWithoutRef<"li"> & {
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
