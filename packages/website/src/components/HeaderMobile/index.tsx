import { ReactNode } from "react";

import HeaderActionSiteSettings from "@/components/HeaderActionSiteSettings";
import HeaderPrimary from "@/components/HeaderPrimary";
import HeaderSocial from "@/components/HeaderSocial";

import * as S from "./styles";

export type HeaderMobileProps = Readonly<{
  backButton?: ReactNode;
}>;

export default function HeaderMobile({ backButton }: HeaderMobileProps) {
  return (
    <S.Container>
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
    </S.Container>
  );
}
