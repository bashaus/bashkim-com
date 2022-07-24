import { ComponentPropsWithRef } from "react";

import * as S from "./styles";

export type FooterGroupProps = ComponentPropsWithRef<"div">;

export const FooterGroup = (props: FooterGroupProps) => (
  <S.FooterGroup {...props} />
);
