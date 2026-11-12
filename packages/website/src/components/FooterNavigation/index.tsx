import InlineLogo from "@bashkim-com/design-system/InlineLogo";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { useLocale, useTranslations } from "next-intl";

import {
  getCookiesPath,
  getExternalGitHubUrl,
  getExternalLinkedInUrl,
  getExternalMediumUrl,
  getExternalSitePointUrl,
  getExternalStackOverflowUrl,
  getPortfolioPath,
} from "@/libraries/app/navigation";

import * as S from "./styles";

export default function FooterNavigation() {
  const locale = useLocale();
  const t = useTranslations("FooterNavigation");

  return (
    <Container>
      <InlineLogo aria-label="Bash" width={126} height={36} />
      <S.Slogan>{t("logoTagLine")}</S.Slogan>

      <S.FooterGrid>
        <S.FooterColumn>
          <S.FooterHeader>{t("articlesTitle")}</S.FooterHeader>

          <Link
            variant="footer-link"
            href={getExternalMediumUrl()}
            target="_blank"
            rel="noreferrer noopener"
          >
            {t("onMediumButtonLabel")}
          </Link>

          <Link
            variant="footer-link"
            href={getExternalSitePointUrl()}
            target="_blank"
            rel="noreferrer noopener"
          >
            {t("onSitePointButtonLabel")}
          </Link>
        </S.FooterColumn>

        <S.FooterColumn>
          <S.FooterHeader>{t("portfolioTitle")}</S.FooterHeader>

          <Link variant="footer-link" href={getPortfolioPath({ locale })}>
            {t("caseStudiesButtonLabel")}
          </Link>

          <Link
            variant="footer-link"
            href={getExternalGitHubUrl()}
            target="_blank"
            rel="noreferrer noopener"
          >
            {t("onGitHubButtonLabel")}
          </Link>
        </S.FooterColumn>

        <S.FooterColumn>
          <S.FooterHeader>{t("connectTitle")}</S.FooterHeader>
          <Link
            variant="footer-link"
            href={getExternalStackOverflowUrl()}
            target="_blank"
            rel="noreferrer noopener"
          >
            {t("onStackOverflowButtonLabel")}
          </Link>

          <Link
            variant="footer-link"
            href={getExternalLinkedInUrl()}
            target="_blank"
            rel="noreferrer noopener"
          >
            {t("onLinkedInButtonLabel")}
          </Link>
        </S.FooterColumn>

        <S.FooterColumn>
          <S.FooterHeader>{t("legalTitle")}</S.FooterHeader>
          <Link variant="footer-link" href={getCookiesPath({ locale })}>
            {t("cookiesButtonLabel")}
          </Link>
        </S.FooterColumn>
      </S.FooterGrid>
    </Container>
  );
}
