import { Children, PropsWithChildren } from "react";

import { useCarousel } from "../CarouselProvider/context";
import * as S from "./styles";

export type CarouselViewportProps = Readonly<PropsWithChildren>;

export default function CarouselViewport({ children }: CarouselViewportProps) {
  const [emblaRef] = useCarousel();

  return (
    <S.Viewport ref={emblaRef}>
      <S.Container>
        {Children.map(children, (child, i) => (
          <S.Slide key={i}>{child}</S.Slide>
        ))}
      </S.Container>
    </S.Viewport>
  );
}
