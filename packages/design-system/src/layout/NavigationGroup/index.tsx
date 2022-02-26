import { HTMLAttributes } from "react";

import * as S from "./styles";

export type NavigationGroupProps = HTMLAttributes<HTMLUListElement>;

export const NavigationGroup = (props: NavigationGroupProps) => (
  <S.NavigationGroup {...props} />
);
