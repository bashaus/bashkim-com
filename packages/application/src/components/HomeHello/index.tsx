import { PageHeaderPartial } from "@bashkim-com/design-system";
import Link from "next/link";

import BackgroundImage from "%assets/images/home/background-image.jpg";
import PortfolioVector from "%assets/vectors/icons/portfolio.svg";
import GitHubVector from "%assets/vectors/social/github.svg";

import * as S from "./styles";

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
            <a>
              <S.LinkIcon>
                <PortfolioVector />
              </S.LinkIcon>
              View portfolio
            </a>
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
          <Link href="/about">
            <a>Bash</a>
          </Link>
        </S.IntroductionName>
        <span> </span>
        <S.IntroductionSpiel>
          I&apos;m a London&#8209;based Creative Technologist specialising in
          <span> </span>
          <Link href="/portfolio#tangible-media">
            <a>tangible&nbsp;media</a>
          </Link>
          <span> and </span>
          <Link href="/portfolio#web-development">
            <a>web&nbsp;development</a>
          </Link>
          .
        </S.IntroductionSpiel>
      </p>
    </S.Introduction>
  </PageHeaderPartial>
);
