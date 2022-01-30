import { HTMLAttributes } from "react";

import * as S from "./styles";

export type NavigationItemProps = HTMLAttributes<HTMLLIElement> & {
  isSelected?: boolean;
};

export const NavigationItem = ({
  isSelected = false,
  ...props
}: NavigationItemProps): JSX.Element => (
  <S.NavigationItem
    aria-current={isSelected ? "location" : undefined}
    {...props}
  />
);
