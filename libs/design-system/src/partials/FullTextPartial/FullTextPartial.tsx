import { ReactNode } from "react";

import { RichTextFormatter } from "../../formatters/RichTextFormatter/RichTextFormatter";
import * as S from "./FullTextPartial.styles";

export type FullTextPartialProps = {
  children?: ReactNode;
};

export const FullTextPartial = ({ children }: FullTextPartialProps) => (
  <S.FullTextPartial>
    <RichTextFormatter>{children}</RichTextFormatter>
  </S.FullTextPartial>
);
