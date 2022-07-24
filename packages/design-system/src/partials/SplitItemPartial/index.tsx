import { ComponentPropsWithRef, ReactNode } from "react";

import { RichTextFormatter } from "../../formatters/RichTextFormatter";
import * as S from "./styles";

export type SplitItemPartialProps = ComponentPropsWithRef<"div"> & {
  backgroundImage?: string;
  children?: ReactNode;
};

export const SplitItemPartial = ({
  backgroundImage,
  children,
  ...props
}: SplitItemPartialProps) => (
  <S.SplitItemPartial
    prop-background-image={backgroundImage}
    className={backgroundImage ? "SplitPartial_chevron" : undefined}
    {...props}
  >
    <RichTextFormatter>{children}</RichTextFormatter>
  </S.SplitItemPartial>
);
