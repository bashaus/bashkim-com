import { PageHeaderPartial } from "@bashkim-com/design-system";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "next/link";

import PortfolioVector from "../../../../assets/vectors/icons/portfolio.svg";
import GitHubVector from "../../../../assets/vectors/social/github.svg";
import BackgroundImage from "../../assets/background-image.jpg";
import styles from "./styles.module.scss";

export default function HomeHello() {
  return (
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
              <GitHubVector className={styles["LinkIcon"]} />
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
        <Typography variant="h1">Hello, I&apos;m Bash.</Typography>
        <Typography>
          I&apos;m a Digital Nomad Technologist based in Barcelona, specialising
          in{" "}
          <Button
            variant="outlined"
            color="currentColor"
            href="/portfolio#tangible-media"
          >
            tangible&nbsp;media
          </Button>{" "}
          and{" "}
          <Button
            variant="outlined"
            color="currentColor"
            href="/portfolio#web-development"
          >
            web&nbsp;development
          </Button>
        </Typography>
      </div>
    </PageHeaderPartial>
  );
}
