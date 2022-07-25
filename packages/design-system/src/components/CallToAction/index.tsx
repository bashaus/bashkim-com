import { ComponentPropsWithoutRef } from "react";

import * as S from "./styles";

export type CallToActionProps = ComponentPropsWithoutRef<"div">;

export const CallToAction = (props: CallToActionProps) => (
  <S.CallToAction {...props} />
);
