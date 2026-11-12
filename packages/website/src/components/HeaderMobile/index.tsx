import { useTranslations } from "next-intl";
import { ReactNode } from "react";

import HeaderActionSiteSettings from "@/components/HeaderActionSiteSettings";
import HeaderPrimary from "@/components/HeaderPrimary";
import HeaderSocial from "@/components/HeaderSocial";

import * as S from "./styles";

export type HeaderMobileProps = Readonly<{
  backButton?: ReactNode;
}>;

export default function HeaderMobile({ backButton }: HeaderMobileProps) {
  const t = useTranslations("HeaderMobile");

  return (
    <S.Container role="toolbar">
      <S.PrimaryToolbar disableGutters>
        <S.PrimaryAction>{backButton}</S.PrimaryAction>
        <S.SiteTitle sx={{ flex: 1 }}>
          <S.SiteName>{t("siteName")}</S.SiteName>
          <S.SiteDescription>{t("siteDescription")}</S.SiteDescription>
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
