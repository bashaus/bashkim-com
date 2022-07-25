import { ComponentPropsWithoutRef } from "react";

import * as S from "./styles";

export type LogoProps = ComponentPropsWithoutRef<"div">;

export const Logo = (props: LogoProps) => (
  <S.Logo {...props}>
    <S.Name>Bashkim Isai</S.Name>
    <S.Title>Creative Technologist</S.Title>
  </S.Logo>
);
