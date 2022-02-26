import { HTMLAttributes } from "react";

import * as S from "./styles";

export type SplitPartialProps = HTMLAttributes<HTMLDivElement> & {
  index?: number;
};

export const SplitPartial = ({ index = 0, ...props }: SplitPartialProps) => (
  <S.SplitPartial props-index={index} {...props} />
);
