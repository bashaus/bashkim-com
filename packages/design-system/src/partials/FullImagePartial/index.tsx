import { HTMLAttributes } from "react";

import * as S from "./styles";

export type FullImagePartialProps = HTMLAttributes<HTMLDivElement>;

export const FullImagePartial = (props: FullImagePartialProps) => (
  <S.FullImagePartial {...props} />
);
