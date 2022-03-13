import { InputHTMLAttributes, ReactNode } from "react";

import * as S from "./styles";

export type SwitchProps = InputHTMLAttributes<HTMLInputElement> & {
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
