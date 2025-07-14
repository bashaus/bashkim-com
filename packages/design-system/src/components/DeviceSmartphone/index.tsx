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
    <S.DeviceSmartphone>
      <S.Wrapper>
        <S.Device />
        <S.Figure>{figure}</S.Figure>
      </S.Wrapper>

      {children && <S.Caption>{children}</S.Caption>}
    </S.DeviceSmartphone>
  );
}
