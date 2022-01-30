import { ReactNode } from "react";

import { RichTextFormatter } from "../../formatters/RichTextFormatter";
import * as S from "./styles";

export type FullTextPartialProps = {
  children?: ReactNode;
};

export const FullTextPartial = ({
  children,
}: FullTextPartialProps): JSX.Element => (
  <S.FullTextPartial>
    <RichTextFormatter>{children}</RichTextFormatter>
  </S.FullTextPartial>
);
