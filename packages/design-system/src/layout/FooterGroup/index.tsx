import { HTMLAttributes } from "react";

import * as S from "./styles";

export type FooterGroupProps = HTMLAttributes<HTMLDivElement>;

export const FooterGroup = (props: FooterGroupProps): JSX.Element => (
  <S.FooterGroup {...props} />
);
