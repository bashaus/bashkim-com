import { HTMLAttributes } from "react";

import * as S from "./styles";

export type NewspaperPartialProps = HTMLAttributes<HTMLDivElement>;

export const NewspaperPartial = (props: NewspaperPartialProps): JSX.Element => (
  <S.NewspaperPartial {...props} />
);
