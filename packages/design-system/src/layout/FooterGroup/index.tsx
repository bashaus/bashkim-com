import { ComponentPropsWithoutRef } from "react";

import * as S from "./styles";

export type FooterGroupProps = ComponentPropsWithoutRef<"div">;

export const FooterGroup = (props: FooterGroupProps) => (
  <S.FooterGroup {...props} />
);
