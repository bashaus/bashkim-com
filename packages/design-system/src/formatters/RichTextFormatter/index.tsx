import { ComponentPropsWithRef } from "react";

import * as S from "./styles";

export type RichTextFormatterProps = ComponentPropsWithRef<"div">;

export const RichTextFormatter = (props: RichTextFormatterProps) => (
  <S.RichTextFormatter {...props} />
);
