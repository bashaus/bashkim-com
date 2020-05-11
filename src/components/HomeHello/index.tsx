import React from "react";
import Link from "next/link";

import PartialHeaderText from "%components/PartialHeaderText";

import IconGitHub from "%public/static/vectors/social/github.svg";
import IconPortfolio from "%public/static/vectors/icons/portfolio.svg";

import styles from "./styles.module.scss";

const HomeHello = (): JSX.Element => (
  <div className={styles.HomeHello}>
    <PartialHeaderText
      backgroundClassName={styles.background}
      aside={
        <ul className={styles.HomeHello_Links}>
          <li>
            <a
              href="https://github.com/bashaus?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className={styles.icon}>
                <IconGitHub />
              </svg>
              View code
            </a>
          </li>
          <li>
            <Link href="/portfolio">
              <a>
                <svg className={styles.icon}>
                  <IconPortfolio />
                </svg>
                View portfolio
              </a>
            </Link>
          </li>
        </ul>
      }
    >
      <div className={styles.HomeHello_Introduction}>
        <div className={styles.content}>
          <h1 className={styles.text}>Hello!</h1>
        </div>

        <p>
          <span className={styles.name}>
            <span>My name is </span>
            <Link href="/about">
              <a>Bash</a>
            </Link>
          </span>
          <span> </span>
          <span className={styles.spiel}>
            I&apos;m a London&#8209;based Creative Technologist specialising in
            <span> </span>
            <Link href="/portfolio#physical-computing">
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

export default HomeHello;
