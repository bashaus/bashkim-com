import { ComponentPropsWithoutRef } from "react";

import * as S from "./styles";

export type RichTextFormatterProps = ComponentPropsWithoutRef<"div">;

export const RichTextFormatter = (props: RichTextFormatterProps) => (
  <S.RichTextFormatter {...props} />
);
