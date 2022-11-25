import { ComponentPropsWithoutRef } from "react";

import * as S from "./ModalFrame.styles";

export type ModalFrameProps = ComponentPropsWithoutRef<"div">;

export const ModalFrame = (props: ModalFrameProps) => {
  return <S.ModalFrame {...props} />;
};
