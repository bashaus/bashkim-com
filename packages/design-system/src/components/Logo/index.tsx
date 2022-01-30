import { HTMLAttributes } from "react";

import * as S from "./styles";

export type LogoProps = HTMLAttributes<HTMLDivElement>;

export const Logo = (props: LogoProps): JSX.Element => (
  <S.Logo {...props}>
    <S.Name>Bashkim Isai</S.Name>
    <S.Title>Creative Technologist</S.Title>
  </S.Logo>
);
