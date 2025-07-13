import { ComponentPropsWithoutRef } from "react";

import * as S from "./styles";

export type SplitPartialProps = Readonly<
  ComponentPropsWithoutRef<"div"> & {
    index?: number;
  }
>;

export default function SplitPartial({
  index = 0,
  ...props
}: SplitPartialProps) {
  return (
    <S.Container
      direction="row"
      data-index={index % 2 === 1 ? "odd" : "even"}
      {...props}
    />
  );
}
