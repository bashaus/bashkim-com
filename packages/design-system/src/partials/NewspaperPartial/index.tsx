import { PropsWithChildren } from "react";

import * as S from "./styles";

export type NewspaperPartialProps = Readonly<PropsWithChildren>;

export default function NewspaperPartial({ children }: NewspaperPartialProps) {
  return <S.NewspaperContainer>{children}</S.NewspaperContainer>;
}
