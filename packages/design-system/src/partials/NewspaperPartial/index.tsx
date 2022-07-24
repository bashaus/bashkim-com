import { ComponentPropsWithRef } from "react";

import * as S from "./styles";

export type NewspaperPartialProps = ComponentPropsWithRef<"div">;

export const NewspaperPartial = (props: NewspaperPartialProps) => (
  <S.NewspaperPartial {...props} />
);
