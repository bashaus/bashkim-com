import { ReactNode } from "react";

import { RichTextFormatter } from "../../formatters/RichTextFormatter";
import * as S from "./styles";

export type DeviceSmartphoneProps = {
  children: ReactNode;
  figure: ReactNode;
};

/**
 * A scrollable screenshot encapsulated by a smartphone design.
 */
export const DeviceSmartphone = ({
  children,
  figure,
}: DeviceSmartphoneProps): JSX.Element => (
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
