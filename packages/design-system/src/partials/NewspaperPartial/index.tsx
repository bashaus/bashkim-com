import { ComponentPropsWithoutRef } from "react";

import * as S from "./styles";

export type NewspaperPartialProps = ComponentPropsWithoutRef<"div">;

export const NewspaperPartial = (props: NewspaperPartialProps) => (
  <S.NewspaperPartial {...props} />
);
