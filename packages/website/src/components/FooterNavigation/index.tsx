import InlineLogo from "@bashkim-com/design-system/InlineLogo";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";

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
  return (
    <Container>
      <InlineLogo aria-label="Bash" width={126} height={36} />
      <S.Slogan>Digital Technologist</S.Slogan>

      <S.FooterGrid>
        <S.FooterColumn>
          <S.FooterHeader>Articles</S.FooterHeader>

          <Link
            variant="footer-link"
            href={getExternalMediumUrl()}
            target="_blank"
            rel="noreferrer noopener"
          >
            On Medium
          </Link>

          <Link
            variant="footer-link"
            href={getExternalSitePointUrl()}
            target="_blank"
            rel="noreferrer noopener"
          >
            On Site Point
          </Link>
        </S.FooterColumn>

        <S.FooterColumn>
          <S.FooterHeader>Portfolio</S.FooterHeader>

          <Link variant="footer-link" href={getPortfolioPath()}>
            Case studies
          </Link>

          <Link
            variant="footer-link"
            href={getExternalGitHubUrl()}
            target="_blank"
            rel="noreferrer noopener"
          >
            On GitHub
          </Link>
        </S.FooterColumn>

        <S.FooterColumn>
          <S.FooterHeader>Connect</S.FooterHeader>
          <Link
            variant="footer-link"
            href={getExternalStackOverflowUrl()}
            target="_blank"
            rel="noreferrer noopener"
          >
            Stack Overflow
          </Link>

          <Link
            variant="footer-link"
            href={getExternalLinkedInUrl()}
            target="_blank"
            rel="noreferrer noopener"
          >
            LinkedIn
          </Link>
        </S.FooterColumn>

        <S.FooterColumn>
          <S.FooterHeader>Legal</S.FooterHeader>
          <Link variant="footer-link" href={getCookiesPath()}>
            Cookies
          </Link>
        </S.FooterColumn>
      </S.FooterGrid>
    </Container>
  );
}
