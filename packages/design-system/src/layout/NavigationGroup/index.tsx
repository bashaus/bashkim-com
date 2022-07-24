import { ComponentPropsWithRef } from "react";

import * as S from "./styles";

export type NavigationGroupProps = ComponentPropsWithRef<"ul">;

export const NavigationGroup = (props: NavigationGroupProps) => (
  <S.NavigationGroup {...props} />
);
