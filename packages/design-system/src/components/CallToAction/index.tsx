import { HTMLAttributes } from "react";

import * as S from "./styles";

export type CallToActionProps = HTMLAttributes<HTMLDivElement>;

export const CallToAction = (props: CallToActionProps) => (
  <S.CallToAction {...props} />
);
