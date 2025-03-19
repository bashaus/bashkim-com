import { SiteLogo } from "@bashkim-com/design-system";
import Link from "@mui/material/Link";

import * as S from "./styles";

export default function FooterNavigation() {
  return (
    <S.Container>
      <SiteLogo aria-label="Bash" />
      <S.Slogan>Digital Nomad Technologist</S.Slogan>

      <S.FooterGrid>
        <S.FooterColumn>
          <S.FooterHeader>Articles</S.FooterHeader>

          <Link
            variant="footer-link"
            href="https://medium.com/@bashaus"
            target="_blank"
            rel="noreferrer noopener"
          >
            On Medium
          </Link>

          <Link
            variant="footer-link"
            href="https://www.sitepoint.com/author/bashaus/"
            target="_blank"
            rel="noreferrer noopener"
          >
            On Site Point
          </Link>
        </S.FooterColumn>

        <S.FooterColumn>
          <S.FooterHeader>Portfolio</S.FooterHeader>

          <Link variant="footer-link" href="/portfolio">
            Case studies
          </Link>

          <Link
            variant="footer-link"
            href="https://github.com/bashaus?tab=repositories"
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
            href="https://stackoverflow.com/users/600240/bashaus"
            target="_blank"
            rel="noreferrer noopener"
          >
            Stack Overflow
          </Link>

          <Link
            variant="footer-link"
            href="https://www.linkedin.com/in/bashaus/"
            target="_blank"
            rel="noreferrer noopener"
          >
            LinkedIn
          </Link>
        </S.FooterColumn>

        <S.FooterColumn>
          <S.FooterHeader>Legal</S.FooterHeader>
          <Link variant="footer-link" href="/cookies">
            Cookies
          </Link>
        </S.FooterColumn>
      </S.FooterGrid>
    </S.Container>
  );
}
