import { ReactNode } from "react";

import * as S from "./styles";

export type CaptionedPartialProps = {
  children: ReactNode;

  /**
   * An image, canvas, etc. which represents the figure
   */
  figure: ReactNode;
};

export const CaptionedPartial = ({
  children,
  figure,
}: CaptionedPartialProps): JSX.Element => (
  <S.CaptionedPartial>
    <S.Caption>{children}</S.Caption>
    <S.Figure>{figure}</S.Figure>
  </S.CaptionedPartial>
);
