import { PageHeaderPartial } from "@bashkim-com/design-system";
import Link from "next/link";

import BackgroundImage from "../../assets/images/home/background-image.jpg";
import { ReactComponent as PortfolioVector } from "../../assets/vectors/icons/portfolio.svg";
import { ReactComponent as GitHubVector } from "../../assets/vectors/social/github.svg";

import * as S from "./HomeHello.styles";

export const HomeHello = () => (
  <PageHeaderPartial
    id="HomePage-Hello"
    imageDesktop={BackgroundImage.src}
    aside={
      <S.Links>
        <S.Link>
          <a
            href="https://github.com/bashaus?tab=repositories"
            target="_blank"
            rel="noreferrer"
          >
            <S.LinkIcon>
              <GitHubVector />
            </S.LinkIcon>
            View code
          </a>
        </S.Link>

        <S.Link>
          <Link href="/portfolio" passHref>
            <S.LinkIcon>
              <PortfolioVector />
            </S.LinkIcon>
            View portfolio
          </Link>
        </S.Link>
      </S.Links>
    }
  >
    <S.Introduction>
      <S.IntroductionTitle>Hello.</S.IntroductionTitle>

      <p>
        <S.IntroductionName>
          <span>My name is </span>
          <Link href="/about">Bash</Link>
        </S.IntroductionName>
        <span> </span>
        <S.IntroductionSpiel>
          I&apos;m a London&#8209;based Creative Technologist specialising in
          <span> </span>
          <Link href="/portfolio#tangible-media">tangible&nbsp;media</Link>
          <span> and </span>
          <Link href="/portfolio#web-development">web&nbsp;development</Link>.
        </S.IntroductionSpiel>
      </p>
    </S.Introduction>
  </PageHeaderPartial>
);
