import { ComponentPropsWithoutRef, ReactNode } from "react";

import { RichTextFormatter } from "../../formatters/RichTextFormatter/RichTextFormatter";
import * as S from "./SplitItemPartial.styles";

export type SplitItemPartialProps = ComponentPropsWithoutRef<"div"> & {
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
