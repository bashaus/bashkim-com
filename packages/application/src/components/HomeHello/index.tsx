import { HeaderTextPartial } from "@bashkim-com/design-system";
import Link from "next/link";

import PortfolioVector from "%assets/vectors/icons/portfolio.svg";
import GitHubVector from "%assets/vectors/social/github.svg";

import styles from "./styles.module.scss";

export const HomeHello = (): JSX.Element => (
  <div className={styles.HomeHello}>
    <HeaderTextPartial
      backgroundClassName={styles.Background}
      aside={
        <ul className={styles.Links}>
          <li>
            <a
              href="https://github.com/bashaus?tab=repositories"
              target="_blank"
              rel="noreferrer"
            >
              <svg className={styles.Icon}>
                <GitHubVector />
              </svg>
              View code
            </a>
          </li>
          <li>
            <Link href="/portfolio" passHref>
              <a>
                <svg className={styles.Icon}>
                  <PortfolioVector />
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
    </HeaderTextPartial>
  </div>
);
