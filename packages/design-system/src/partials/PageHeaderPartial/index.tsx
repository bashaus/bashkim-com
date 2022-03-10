import { ReactNode } from "react";

import * as S from "./styles";

export type PageHeaderPartialProps = {
  aside?: ReactNode;
  children?: ReactNode;
  id?: string;
  imageDesktop?: string;
  imageMobile?: string;
};

export const PageHeaderPartial = ({
  aside,
  children,
  id,
  imageDesktop,
  imageMobile,
}: PageHeaderPartialProps) => (
  <S.PageHeaderPartial id={id}>
    {id && imageDesktop && (
      <style type="text/css">
        {`
          #${id} {
            background-image: url(${imageDesktop});
          }
        `}
      </style>
    )}

    {id && imageMobile && (
      <style type="text/css">
        {`
          @media screen and (max-width: 767px) {
            #${id} {
              background-image: url(${imageMobile});
            }
          }
        `}
      </style>
    )}

    <S.Foreground>
      <S.Content>{children}</S.Content>
      {aside && <S.Aside>{aside}</S.Aside>}
    </S.Foreground>
  </S.PageHeaderPartial>
);
