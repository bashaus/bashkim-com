import Link from "next/link";

import { PartialHeaderText } from "@bashkim-com/design-system";

import IconGitHub from "%public/static/vectors/social/github.svg";
import IconPortfolio from "%public/static/vectors/icons/portfolio.svg";

import styles from "./styles.module.scss";

export const HomeHello = (): JSX.Element => (
  <div className={styles.HomeHello}>
    <PartialHeaderText
      backgroundClassName={styles.Background}
      aside={
        <ul className={styles.Links}>
          <li>
            <a
              href="https://github.com/bashaus?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className={styles.Icon}>
                <IconGitHub />
              </svg>
              View code
            </a>
          </li>
          <li>
            <Link href="/portfolio" passHref>
              <a>
                <svg className={styles.Icon}>
                  <IconPortfolio />
                </svg>
                View portfolio
              </a>
            </Link>
          </li>
        </ul>
      }
    >
      <div className={styles.Introduction}>
        <h1>Hello!</h1>

        <p>
          <span className={styles.Name}>
            <span>My name is </span>
            <Link href="/about">
              <a>Bash</a>
            </Link>
          </span>
          <span> </span>
          <span className={styles.Spiel}>
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
          </span>
        </p>
      </div>
    </PartialHeaderText>
  </div>
);
