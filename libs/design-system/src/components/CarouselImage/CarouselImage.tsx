import { ReactNode } from "react";

import { RichTextFormatter } from "../../formatters/RichTextFormatter/RichTextFormatter";
import * as S from "./CarouselImage.styles";

export type CarouselImageProps = {
  figure?: ReactNode;
  children?: ReactNode;
};

export const CarouselImage = ({ children, figure }: CarouselImageProps) => (
  <S.CarouselImage>
    <S.Figure>{figure}</S.Figure>

    {children && (
      <figcaption>
        <RichTextFormatter>{children}</RichTextFormatter>
      </figcaption>
    )}
  </S.CarouselImage>
);
