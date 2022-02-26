import { ReactNode } from "react";

import * as S from "./styles";

export type HeaderTextPartialProps = {
  aside?: ReactNode;
  children?: ReactNode;
};

export const HeaderTextPartial = ({
  aside,
  children,
  ...props
}: HeaderTextPartialProps) => (
  <S.HeaderTextPartial {...props}>
    <S.Foreground>
      <S.Content>{children}</S.Content>
      {aside && <S.Aside>{aside}</S.Aside>}
    </S.Foreground>
  </S.HeaderTextPartial>
);
