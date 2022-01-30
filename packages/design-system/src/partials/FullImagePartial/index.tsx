import { HTMLAttributes } from "react";

import * as S from "./styles";

export type FullImagePartialProps = HTMLAttributes<HTMLDivElement>;

export const FullImagePartial = (props: FullImagePartialProps): JSX.Element => (
  <S.FullImagePartial {...props} />
);
