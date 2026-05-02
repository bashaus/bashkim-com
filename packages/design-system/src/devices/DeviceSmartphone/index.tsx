import { PropsWithChildren, ReactNode } from "react";

import * as S from "./styles";

export type DeviceSmartphoneProps = Readonly<
  PropsWithChildren<{
    figure: ReactNode;
  }>
>;

export default function DeviceSmartphone({
  children,
  figure,
}: DeviceSmartphoneProps) {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Device />
        <S.Viewport>{figure}</S.Viewport>
      </S.Wrapper>

      <S.Caption>{children}</S.Caption>
    </S.Container>
  );
}
