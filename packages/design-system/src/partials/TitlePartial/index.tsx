import { ReactNode } from "react";

import * as S from "./styles";

export type TitlePartialProps = {
  children?: ReactNode;
  image?: string;
};

export const TitlePartial = ({
  children,
  image,
}: TitlePartialProps): JSX.Element => (
  <S.TitlePartial>
    <S.Content>{children}</S.Content>
    {image && <S.Image src={image} alt="" />}
  </S.TitlePartial>
);
