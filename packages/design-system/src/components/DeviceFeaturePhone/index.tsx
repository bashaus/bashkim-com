import { ReactNode } from "react";

import { RichTextFormatter } from "../../formatters/RichTextFormatter";
import * as S from "./styles";

export type DeviceFeaturePhoneProps = {
  /**
   * A caption of the figure, styled in rich text
   */
  children?: ReactNode;

  /**
   * The `<img />` to display as the feature phone screen
   */
  figure: ReactNode;
};

/**
 * A scrollable screenshot encapsulated by a feature phone design.
 */
export const DeviceFeaturePhone = ({
  children,
  figure,
}: DeviceFeaturePhoneProps) => (
  <S.DeviceFeaturePhone>
    <S.Wrapper>
      <S.Device />
      <S.Figure>{figure}</S.Figure>
    </S.Wrapper>

    {children && (
      <S.Caption>
        <RichTextFormatter>{children}</RichTextFormatter>
      </S.Caption>
    )}
  </S.DeviceFeaturePhone>
);
