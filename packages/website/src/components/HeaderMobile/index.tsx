import { ReactNode } from "react";

import HeaderActionSiteSettings from "../HeaderActionSiteSettings";
import HeaderPrimary from "../HeaderPrimary";
import HeaderSocial from "../HeaderSocial";
import * as S from "./styles";

export type HeaderMobileProps = {
  backButton?: ReactNode;
};

export default function HeaderMobile({ backButton }: HeaderMobileProps) {
  return (
    <>
      <S.PrimaryToolbar disableGutters>
        <S.PrimaryAction>{backButton}</S.PrimaryAction>
        <S.SiteTitle flex={1}>
          <S.SiteName>Bashkim Isai</S.SiteName>
          <S.SiteDescription>Digital Technologist</S.SiteDescription>
        </S.SiteTitle>
        <S.PrimaryAction>
          <HeaderActionSiteSettings />
        </S.PrimaryAction>
      </S.PrimaryToolbar>

      <S.SecondaryToolbarBox>
        <S.SecondaryToolbar disableGutters>
          <HeaderPrimary />
          <HeaderSocial />
        </S.SecondaryToolbar>
      </S.SecondaryToolbarBox>
    </>
  );
}
