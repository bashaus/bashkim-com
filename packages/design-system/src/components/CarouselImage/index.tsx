import { PropsWithChildren, ReactNode } from "react";

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
      {children && <figcaption>{children}</figcaption>}
    </S.CarouselImage>
  );
}
