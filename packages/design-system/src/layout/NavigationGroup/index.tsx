import { ComponentPropsWithoutRef } from "react";

import * as S from "./styles";

export type NavigationGroupProps = ComponentPropsWithoutRef<"ul">;

export const NavigationGroup = (props: NavigationGroupProps) => (
  <S.NavigationGroup {...props} />
);
