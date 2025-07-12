import { PropsWithChildren, ReactNode } from "react";

import RichTextFormatter from "../../formatters/RichTextFormatter";
import * as S from "./styles";

export type DeviceFeaturePhoneProps = Readonly<
  PropsWithChildren<{
    figure: ReactNode;
  }>
>;

/**
 * A scrollable screenshot encapsulated by a feature phone design.
 */
export default function DeviceFeaturePhone({
  children,
  figure,
}: DeviceFeaturePhoneProps) {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Device />
        <S.Figure>{figure}</S.Figure>
      </S.Wrapper>

      {children && (
        <S.Caption>
          <RichTextFormatter>{children}</RichTextFormatter>
        </S.Caption>
      )}
    </S.Container>
  );
}
