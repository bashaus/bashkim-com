import { PropsWithChildren, ReactNode } from "react";

import * as S from "./styles";

export type SocialErrorProps = Readonly<
  PropsWithChildren<{
    title?: ReactNode;
    message?: ReactNode;
    icon?: ReactNode;
  }>
>;

export default function SocialError({
  icon = <S.ErrorIcon />,
  title,
  message,
  children,
}: SocialErrorProps) {
  return (
    <S.Container>
      <S.Icon>{icon}</S.Icon>
      <S.Title variant="h6" gutterBottom>
        {title}
      </S.Title>
      <S.Message>{message}</S.Message>
      <S.Actions>{children}</S.Actions>
    </S.Container>
  );
}
