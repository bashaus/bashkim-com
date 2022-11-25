import { ComponentPropsWithoutRef } from "react";

import * as S from "./FullImagePartial.styles";

export type FullImagePartialProps = ComponentPropsWithoutRef<"div">;

export const FullImagePartial = (props: FullImagePartialProps) => (
  <S.FullImagePartial {...props} />
);
