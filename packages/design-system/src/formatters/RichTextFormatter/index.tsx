import { HTMLAttributes } from "react";

import * as S from "./styles";

export type RichTextFormatterProps = HTMLAttributes<HTMLDivElement>;

export const RichTextFormatter = (
  props: RichTextFormatterProps
): JSX.Element => <S.RichTextFormatter {...props} />;
