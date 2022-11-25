import { ComponentPropsWithoutRef } from "react";

import * as S from "./Navigation.styles";

export type NavigationProps = ComponentPropsWithoutRef<"div">;

export const Navigation = ({ children, ...props }: NavigationProps) => (
  <S.Navigation {...props}>
    <S.Content>{children}</S.Content>
  </S.Navigation>
);
