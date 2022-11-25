import { ComponentPropsWithoutRef, ReactNode } from "react";

import * as S from "./Switch.styles";

export type SwitchProps = ComponentPropsWithoutRef<"input"> & {
  iconOff?: ReactNode;
  iconOn?: ReactNode;
};

export const Switch = ({
  checked = false,
  iconOff,
  iconOn,
  ...props
}: SwitchProps) => (
  <S.Switch aria-checked={checked}>
    <S.Slider>
      {iconOff && <S.IconOff>{iconOff}</S.IconOff>}
      {iconOn && <S.IconOn>{iconOn}</S.IconOn>}
      <S.Input type="checkbox" checked={checked} {...props} />
    </S.Slider>
  </S.Switch>
);
