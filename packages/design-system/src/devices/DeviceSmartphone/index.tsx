import { PropsWithChildren, ReactNode } from "react";

import * as S from "./styles";

export type DeviceSmartphoneProps = Readonly<
  PropsWithChildren<{
    figure: ReactNode;
  }>
>;

/**
 * A scrollable screenshot encapsulated by a smartphone design.
 */
export default function DeviceSmartphone({
  children,
  figure,
}: DeviceSmartphoneProps) {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Device />
        <S.Figure>{figure}</S.Figure>
      </S.Wrapper>

      <S.Caption>{children}</S.Caption>
    </S.Container>
  );
}
