import { PageHeaderPartial } from "@bashkim-com/design-system";
import Link from "next/link";

import PortfolioVector from "../../../../assets/vectors/icons/Portfolio.svg";
import GitHubVector from "../../../../assets/vectors/social/GitHub.svg";
import BackgroundImage from "../../assets/background-image.jpg";
import styles from "./styles.module.scss";

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
            <GitHubVector
              className={styles["LinkIcon"]}
              viewBox="0 0 100 100"
            />
            View code
          </a>
        </li>

        <li className={styles["Link"]}>
          <Link href="/portfolio" passHref>
            <PortfolioVector className={styles["LinkIcon"]} />
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
        I&apos;m a Digital Nomad Technologist based in Barcelona, specialising
        in <Link href="/portfolio#tangible-media">tangible&nbsp;media</Link> and{" "}
        <Link href="/portfolio#web-development">web&nbsp;development</Link>
      </p>
    </div>
  </PageHeaderPartial>
);
