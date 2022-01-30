import { HTMLAttributes } from "react";

import * as S from "./styles";

export type NavigationProps = HTMLAttributes<HTMLDivElement>;

export const Navigation = ({
  children,
  ...props
}: NavigationProps): JSX.Element => (
  <S.Navigation {...props}>
    <S.Content>{children}</S.Content>
  </S.Navigation>
);
