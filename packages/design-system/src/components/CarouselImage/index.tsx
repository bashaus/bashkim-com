import { PropsWithChildren, ReactNode } from "react";

import RichTextFormatter from "../../formatters/RichTextFormatter";
import * as S from "./styles";

export type CarouselImageProps = Readonly<
  PropsWithChildren<{
    figure?: ReactNode;
  }>
>;

export default function CarouselImage({
  children,
  figure,
}: CarouselImageProps) {
  return (
    <S.CarouselImage>
      <S.Figure>{figure}</S.Figure>

      {children && (
        <figcaption>
          <RichTextFormatter>{children}</RichTextFormatter>
        </figcaption>
      )}
    </S.CarouselImage>
  );
}
