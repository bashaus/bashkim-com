import { HTMLAttributes } from "react";

import * as S from "./styles";

export type NavigationGroupProps = HTMLAttributes<HTMLUListElement>;

export const NavigationGroup = (props: NavigationGroupProps): JSX.Element => (
  <S.NavigationGroup {...props} />
);
