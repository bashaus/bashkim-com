import { Children, isValidElement, PropsWithChildren } from "react";

import { useCarousel } from "../CarouselProvider/context";
import * as S from "./styles";

export type CarouselViewportProps = Readonly<PropsWithChildren>;

export default function CarouselViewport({ children }: CarouselViewportProps) {
  const [emblaRef] = useCarousel();

  return (
    <S.Viewport ref={emblaRef}>
      <S.Container>
        {Children.map(children, (child) =>
          isValidElement(child) ? (
            <S.Slide key={child.key}>{child}</S.Slide>
          ) : null,
        )}
      </S.Container>
    </S.Viewport>
  );
}
