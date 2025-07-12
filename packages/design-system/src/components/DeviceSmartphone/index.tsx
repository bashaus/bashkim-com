import { PropsWithChildren, ReactNode } from "react";

import RichTextFormatter from "../../formatters/RichTextFormatter";
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

      <S.Caption>
        <RichTextFormatter>{children}</RichTextFormatter>
      </S.Caption>
    </S.DeviceSmartphone>
  );
}
