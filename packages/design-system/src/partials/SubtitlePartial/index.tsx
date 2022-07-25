import { ComponentPropsWithoutRef } from "react";

import { RichTextFormatter } from "../../formatters/RichTextFormatter";
import * as S from "./styles";

export type SubtitlePartialProps = ComponentPropsWithoutRef<"div">;

export const SubtitlePartial = ({
  children,
  ...props
}: SubtitlePartialProps) => (
  <S.SubtitlePartial {...props}>
    <RichTextFormatter>{children}</RichTextFormatter>
  </S.SubtitlePartial>
);
