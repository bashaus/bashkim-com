import * as S from "./styles";

export type HeaderImagePartialProps = {
  id: string;
  imageDesktop?: string;
  imageMobile?: string;
};

export const HeaderImagePartial = ({
  id,
  imageDesktop,
  imageMobile,
}: HeaderImagePartialProps) => (
  <header id={id}>
    {imageDesktop && (
      <style type="text/css">
        {`
          #${id} ${String(S.Background)} {
            background-image: url(${imageDesktop});
          }
        `}
      </style>
    )}

    {imageMobile && (
      <style type="text/css">
        {`
          @media screen and (max-width: 767px) {
            #${id} ${String(S.Background)} {
              background-image: url(${imageMobile});
            }
          }
        `}
      </style>
    )}

    <S.Background aria-hidden="true" />
  </header>
);
