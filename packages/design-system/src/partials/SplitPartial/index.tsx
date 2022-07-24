import { ComponentPropsWithRef } from "react";

import * as S from "./styles";

export type SplitPartialProps = ComponentPropsWithRef<"div"> & {
  index?: number;
};

export const SplitPartial = ({ index = 0, ...props }: SplitPartialProps) => (
  <S.SplitPartial props-index={index} {...props} />
);
