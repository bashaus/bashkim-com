import { PropsOf } from "@emotion/react";

import * as S from "./styles";

export type CarouselDotProps = Readonly<PropsOf<typeof S.CarouselDot>>;

export default function CarouselDot(props: CarouselDotProps) {
  return <S.CarouselDot {...props} />;
}
