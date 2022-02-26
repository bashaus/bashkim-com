import { ReactNode, useCallback, useState } from "react";

import * as S from "./styles";

export type FooterColumnProps = {
  children: ReactNode;
  className?: string;
  label: string;
};

export const FooterColumn = ({ label, children }: FooterColumnProps) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleHeaderClick = useCallback((): void => {
    setIsVisible(!isVisible);
  }, [isVisible]);

  return (
    <S.FooterColumn aria-expanded={isVisible}>
      <S.Label onClick={handleHeaderClick} onKeyPress={handleHeaderClick}>
        {label}
      </S.Label>

      <S.Content>{children}</S.Content>
    </S.FooterColumn>
  );
};
