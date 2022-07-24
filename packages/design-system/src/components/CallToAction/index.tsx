import { ComponentPropsWithRef } from "react";

import * as S from "./styles";

export type CallToActionProps = ComponentPropsWithRef<"div">;

export const CallToAction = (props: CallToActionProps) => (
  <S.CallToAction {...props} />
);
