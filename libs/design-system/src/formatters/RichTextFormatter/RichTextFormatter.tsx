import { ComponentPropsWithoutRef } from "react";

import * as S from "./RichTextFormatter.styles";

export type RichTextFormatterProps = ComponentPropsWithoutRef<"div">;

export const RichTextFormatter = (props: RichTextFormatterProps) => (
  <S.RichTextFormatter {...props} />
);
