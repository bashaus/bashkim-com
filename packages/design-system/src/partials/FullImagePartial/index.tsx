import { ComponentPropsWithRef } from "react";

import * as S from "./styles";

export type FullImagePartialProps = ComponentPropsWithRef<"div">;

export const FullImagePartial = (props: FullImagePartialProps) => (
  <S.FullImagePartial {...props} />
);
