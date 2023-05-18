import { PageHeaderPartial } from "@bashkim-com/design-system";
import Link from "next/link";

import { ReactComponent as PortfolioVector } from "../../../../assets/vectors/icons/portfolio.svg";
import { ReactComponent as GitHubVector } from "../../../../assets/vectors/social/github.svg";
import BackgroundImage from "../../assets/background-image.jpg";
import styles from "./HomeHello.module.scss";

export const HomeHello = () => (
  <PageHeaderPartial
    id="HomePage-Hello"
    imageDesktop={BackgroundImage.src}
    aside={
      <ul className={styles["Links"]}>
        <li className={styles["Link"]}>
          <a
            href="https://github.com/bashaus?tab=repositories"
            target="_blank"
            rel="noreferrer"
          >
            <svg className={styles["LinkIcon"]}>
              <GitHubVector />
            </svg>
            View code
          </a>
        </li>

        <li className={styles["Link"]}>
          <Link href="/portfolio" passHref>
            <svg className={styles["LinkIcon"]}>
              <PortfolioVector />
            </svg>
            View portfolio
          </Link>
        </li>
      </ul>
    }
  >
    <div className={styles["Introduction"]}>
      <h1>
        Hi! Call me <Link href="/about">Bash</Link>
      </h1>

      <p>
        I&apos;m a London&#8209;based Creative Technologist specialising in
        <span> </span>
        <Link href="/portfolio#tangible-media">tangible&nbsp;media</Link>
        <span> and </span>
        <Link href="/portfolio#web-development">web&nbsp;development</Link>
      </p>
    </div>
  </PageHeaderPartial>
);
