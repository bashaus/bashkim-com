import { ReactNode } from "react";

import { RichTextFormatter } from "../../formatters/RichTextFormatter";
import * as S from "./styles";

export type FullBannerPartialProps = {
  backgroundDesktop?: string;
  backgroundMobile?: string;
  children: ReactNode;
  id: string;
};

export const FullBannerPartial = ({
  backgroundDesktop,
  backgroundMobile,
  children,
  id,
}: FullBannerPartialProps) => (
  <S.FullBannerPartial id={id}>
    <S.Container>
      <S.Content>
        <RichTextFormatter>{children}</RichTextFormatter>
      </S.Content>
    </S.Container>

    {backgroundDesktop && (
      <style type="text/css">
        {`
          #${id} {
            background-image: url(${backgroundDesktop});
          }
        `}
      </style>
    )}

    {backgroundMobile && (
      <style type="text/css">
        {`
          @media screen and (max-width: 767px) {
            #${id} {
              background-image: url(${backgroundMobile});
            }
          }
        `}
      </style>
    )}
  </S.FullBannerPartial>
);
