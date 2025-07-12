import { PropsOf } from "@emotion/react";

import * as S from "./styles";

export type CarouselButtonProps = Readonly<PropsOf<typeof S.CarouselButton>>;

export default function CarouselButton(props: CarouselButtonProps) {
  return <S.CarouselButton {...props} />;
}
